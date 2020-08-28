 <template>
  <div class="full-width">
    <div class="row col-xs-12 justify-center">
      <account-overview :addr="addr"></account-overview>
    </div>

    <div class="row col-xs-12 justify-center">
      <transfer-list
        :transactions="transactions"
        :loading="loading"
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
    'transfer-list': transferList
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
          reason: ''
        }
      ]
    };
  },
  methods: {
    async getTransfer() {
      this.loading = true;
      const resp = await client.trasactions(this.$route.params.addr);
      this.transactions = resp.transactions;
      this.loading = false;
    }
  },
  async mounted() {
    await this.getTransfer();
  },
  watch: {
    async $route() {
      await this.getTransfer();
    }
  }
});
</script>

