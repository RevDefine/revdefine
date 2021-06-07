 <i18n>
{
  'en-us':{
    "transfer": "transfer",
    "deploy": "deploy",
    "Last 7 Days Transfers": "Last 7 Days Transfers",
    "Last 7 Days Deploys": "Last 7 Days Deploys"
  },
  'zh':{
    "transfer": "转账",
    "deploy": "部署",
    "Last 7 Days Transfers":"7天内转账量",
    "Last 7 Days Deploys": "7天内部署量"
  }
}
</i18n>
 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <div class="row col-xs-12 col-sm-12 col-md-12 justify-center items-center search-bg rounded">
        <search-bar @search="search"></search-bar>
        <define-loading :showing="searchLoading"></define-loading>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 q-pr-xs">
        <div class="bg-white q-pa-md rounded-borders">
          <apex-chart
            :loading="transferStatLoading"
            :data="transferStatData"
            :title="$t('Last 30 Days Transfers')"
            :total="transferStatTotal"
            :colors="['#1677FF']"
          ></apex-chart>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-sm-6 col-lg-6 q-pl-xs">
        <div class="bg-white q-pa-md rounded-borders">
          <apex-chart
            :loading="deployStatLoading"
            :data="deployStatData"
            :title="$t('Last 30 Days Deploys')"
            :total="deployStatTotal"
            :colors="['#AC1C36']"
          ></apex-chart>

        </div>
      </div>
    </div>

    <div class="row q-mt-md">
      <last-block-info></last-block-info>
    </div>

    <div class="row q-my-md">
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
import searchBar from '../components/SearchBar.vue';
import lastBlockInfo from '../components/LastBlock.vue';
import latestTransfer from '../components/LatestTransfer.vue';
import apexChart from '../components/ApexChart.vue';
import defineLoading from '../components/Loading.vue';
import client from '../defineAPI';
import { StringType, judgeSearchString } from '../lib';
import { getAddrFromEth } from '../lib/rnode-address';

export default Vue.extend({
  components: {
    'search-bar': searchBar,
    'last-block-info': lastBlockInfo,
    'latest-transfer': latestTransfer,
    'apex-chart': apexChart,
    'define-loading': defineLoading,
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
          reason: '',
        },
      ],
      loading: false,
      searchLoading: false,
      transferStatLoading: false,
      transferStatData: [
        {
          name: this.$t('transfer'),
          data: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
        },
      ],
      transferStatTotal: 0,

      deployStatLoading: false,
      deployStatData: [
        {
          name: this.$t('deploy'),
          data: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
        },
      ],
      deployStatTotal: 0,

      searchString: '',
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
      const data = stat.datas.map((element) => [element.end, element.data]);
      const total = stat.datas.reduce((s, element) => s + element.data, 0);
      this.transferStatData = [
        {
          name: this.$t('transfer'),
          data: data,
        },
      ];
      this.transferStatTotal = total;
      this.transferStatLoading = false;
    },
    async getDeployStat() {
      this.deployStatLoading = true;
      const stat = await client.statDeploy();
      const data = stat.datas.map((element) => [element.end, element.data]);
      const total = stat.datas.reduce((s, element) => s + element.data, 0);
      this.deployStatData = [
        {
          name: this.$t('deploy'),
          data: data,
        },
      ];
      this.deployStatTotal = total;
      this.deployStatLoading = false;
    },
    async search(target: string) {
      this.searchLoading = true;
      const targetType = judgeSearchString(target);
      if (targetType == StringType.revAddress) {
        this.$router.push({ name: 'revaccount', params: { addr: target } });
      } else if (targetType == StringType.ethAddress) {
        const revAddress = getAddrFromEth(target);
        this.$router.push({ name: 'revaccount', params: { addr: revAddress } });
      } else if (targetType == StringType.blockHash) {
        this.$router.push({ name: 'block', params: { blockHash: target } });
      } else if (targetType == StringType.deployId) {
        const block = await client.findDeploy(target);
        this.$router.push({ name: 'deploy', params: { blockHash: block.blockHash, deployId: target } });
      } else if (targetType == StringType.blockNumber) {
        const blockNumber = Number(target);
        const block = await client.getBlocksByHeight(blockNumber, blockNumber);
        this.$router.push({ name: 'block', params: { blockHash: block[0].blockHash } });
      } else {
        this.$router.push({ name: 'notFound' });
      }
    },
  },
  async mounted() {
    const itemsToLoad = [this.requestLatestTransfer(1), this.getTransferStat(), this.getDeployStat()];
    await Promise.all(itemsToLoad);
  },
});
</script>

<style lang="sass" scoped>
.search-bg
  background-image: url('~assets/search-bg.jpg')
  max-width: 1400px
  height: 160px
.rounded
  border-radius: 8px
</style>