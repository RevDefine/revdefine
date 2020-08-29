 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <search-bar @search='search'></search-bar>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 bg-white">
        <apex-chart
          :loading="transferStatLoading"
          :data="transferStatData"
          title="Last 7 Days Transfer"
          :total="transferStatTotal"
        ></apex-chart>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 bg-white">
        <apex-chart
          :loading="deployStatLoading"
          :data="deployStatData"
          title="Last 7 Days Deploy"
          :total="deployStatTotal"
        ></apex-chart>
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
import lastBlockInfo from '../components/LastBlock.vue';
import latestTransfer from '../components/LatestTransfer.vue';
import apexChart from '../components/ApexChart.vue';
import client from '../defineAPI';
export default Vue.extend({
  components: {
    'search-bar': SearchBlockBar,
    'last-block-info': lastBlockInfo,
    'latest-transfer': latestTransfer,
    'apex-chart': apexChart
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
      loading: false,

      transferStatLoading: false,
      transferStatData: [
        {
          name: 'transfer',
          data: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
          ]
        }
      ],
      transferStatTotal: 0,

      deployStatLoading: false,
      deployStatData: [
        {
          name: 'Deploy',
          data: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
          ]
        }
      ],
      deployStatTotal: 0
    };
  },
  methods: {
    async requestLatestTransfer(page: number) {
      this.loading = true;
      const transactions = await client.getLatestTransactions(page);
      this.data = transactions.transactions;
      this.loading = false;
    },
    async getTransferStat() {
      this.transferStatLoading = true;
      const stat = await client.statTransfer();
      const data = stat.datas.map(element => [element.start, element.data]);
      const total = stat.datas.reduce((s, element) => s + element.data, 0);
      this.transferStatData = [
        {
          name: 'transfer',
          data: data
        }
      ];
      this.transferStatTotal = total;
      this.transferStatLoading = false;
    },
    async getDeployStat() {
      this.deployStatLoading = true;
      const stat = await client.statDeploy();
      const data = stat.datas.map(element => [element.start, element.data]);
      const total = stat.datas.reduce((s, element) => s + element.data, 0);
      this.deployStatData = [
        {
          name: 'transfer',
          data: data
        }
      ];
      this.deployStatTotal = total;
      this.deployStatLoading = false;
    },
    search() {}
  },
  async mounted() {
    const itemsToLoad = [this.requestLatestTransfer(1), this.getTransferStat(), this.getDeployStat()];
    await Promise.all(itemsToLoad);
  }
});
</script>

