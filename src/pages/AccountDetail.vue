 <template>
  <div class="full-width">
    <div class="row col-xs-12 justify-center">
      <account-overview :addr="addr"></account-overview>
    </div>

    <div class="row col-xs-12 justify-center q-my-md">
      <transfer-list
        :transactions="transactions"
        :loading="loading"
        :max="maxPages"
        v-on:request="getTransactions"
      ></transfer-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import accountOverview from '../components/AccountOverview.vue';
import transferList from '../components/TransferList.vue';
import client from '../defineAPI';

export default Vue.extend({
  components: {
    'account-overview': accountOverview,
    'transfer-list': transferList,
  },
  name: 'accountDetail',
  data() {
    return {
      addr: '',
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
    async getTransactions(page: number) {
      try {
        this.loading = true;
        const resp = await client.trasactions(this.$route.params.addr, page);
        this.transactions = resp.transactions;
        this.maxPages = resp.pageInfo.totalPage;
        this.loading = false;
      } catch {
        this.loading = false;
        this.$router.push({ name: 'notFound' });
      }
    },
  },
  async mounted() {
    await this.getTransactions(1);
  },
  watch: {
    async $route() {
      await this.getTransactions(1);
    },
  },
});
</script>

