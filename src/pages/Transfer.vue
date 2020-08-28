 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <latest-transfer
        :transactions="transactions"
        :loading="loading"
      ></latest-transfer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import latestTransfer from '../components/LatestTransfer.vue';
import client from '../defineAPI';

export default Vue.extend({
  components: {
    'latest-transfer': latestTransfer
  },
  name: 'transfer',
  data() {
    return {
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
      ],
      loading: false
    };
  },
  methods: {
    async getTransfer() {
      this.loading = true;
      const transactions = await client.getLatestTransactions();
      this.transactions = transactions.transactions;
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

