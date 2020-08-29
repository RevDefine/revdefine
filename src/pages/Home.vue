 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <search-bar @search='search'></search-bar>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 bg-white">
        <chart></chart>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 bg-white">
        <chart></chart>
      </div>
    </div>

    <div class="row">
      <last-block-info></last-block-info>
    </div>

    <div class="row">
      <latest-transfer
        :transactions="data"
        :loading="loading"
        v-on:request="requestLatestTransfer"
      ></latest-transfer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBlockBar from '../components/SearchBar.vue';
import Chart from '../components/ApexChart.vue';
import lastBlockInfo from '../components/LastBlock.vue';
import latestTransfer from '../components/LatestTransfer.vue';
import client from '../defineAPI';
export default Vue.extend({
  components: {
    'search-bar': SearchBlockBar,
    'last-block-info': lastBlockInfo,
    'latest-transfer': latestTransfer,
    chart: Chart
  },
  name: 'Home',
  data() {
    return {
      data: [
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
    async requestLatestTransfer(page: number) {
      this.loading = true;
      const transactions = await client.getLatestTransactions(page);
      this.data = transactions.transactions;
      this.loading = false;
    },
    search() {}
  },
  async mounted() {
    await this.requestLatestTransfer(1);
  }
});
</script>

