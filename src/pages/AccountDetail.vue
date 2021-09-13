 <template>
  <div class="full-width">
    <div class="row col-xs-12 justify-center">
      <account-overview :address="addr" :balance="balance" :loading="loading" :tags="tags"></account-overview>
    </div>

    <div class="row col-xs-12 justify-center q-my-md">
      <transfer-list
        :transactions="transactions"
        :loading="loading"
        :max="maxPages"
        :address="addr"
        v-on:request="getTransactions"
        :page="page"
      ></transfer-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import accountOverview from '../components/AccountOverview.vue';
import transferList from '../components/TransferList.vue';
import client from '../defineAPI';
import {TransactionsResponse} from '../defineAPI/defineTypes'

export default Vue.extend({
  components: {
    'account-overview': accountOverview,
    'transfer-list': transferList,
  },
  name: 'accountDetail',
  data() {
    return {
      addr: '',
      balance: 0,
      page:1,
      tags: [''],
      loading: false,
      transactions: [
        {
          fromAddr: '',
          toAddr: '',
          amount: 0,
          transactionType: '',
          blockHash: '',
          blockNumber: 0,
          deployId: '',
          timestamp: 0,
          isFinalized: false,
          isSucceeded: false,
          reason: '',
        },
      ],
      maxPages: 50,
    };
  },
  methods: {
    async getTransactions(page: number, isSucceeded: boolean, isUserDeploy: boolean) {
      try { 
        this.loading = true;
        let resp: TransactionsResponse;
        if (isUserDeploy && isSucceeded){
          resp =  await client.userTransactionSucceeded(this.$route.params.addr, page);
        } else if(isUserDeploy && !isSucceeded) {
          resp =  await client.userTransaction(this.$route.params.addr, page);
        } else if (!isUserDeploy && isSucceeded){
          resp =  await client.trasactionsSucceeded(this.$route.params.addr, page);
        } else {
          resp =  await client.trasactions(this.$route.params.addr, page);
        }
        this.transactions = resp.transactions;
        this.maxPages = resp.pageInfo.totalPage;
        this.addr = this.$route.params.addr;
        this.page = page
        this.loading = false;
      } catch {
        this.loading = false;
        this.$router.push({ name: 'notFound' });
      }
    },
    async getOverviewData() {
      this.loading = true;
      const account = await client.revAccount(this.$route.params.addr);
      this.balance = account.balance;
      this.tags = account.tags;
      this.loading = false;
    },
  },
  async created() {
    await this.getOverviewData();
    await this.getTransactions(1, false, true);
  },
  watch: {
    async $route() {
      await this.getOverviewData();
      await this.getTransactions(1, false, true);
    },
  },
});
</script>

