 <template>
  <div>
    <div class="row col-xs-12 justify-center">
      <search-bar @search='searchAlert'></search-bar>
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
      <latest-block-info></latest-block-info>
    </div>

    <div class="row">
      <transfer-table></transfer-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBlockBar from '../components/SearchBar.vue';
import Chart from '../components/ApexChart.vue';
import LatestBlockInfo from '../components/LatestBlock.vue';
import TransferTable from '../components/TransferTable.vue';

export default Vue.extend({
  components: {
    'search-bar': SearchBlockBar,
    'latest-block-info': LatestBlockInfo,
    'transfer-table': TransferTable,
    chart: Chart
  },
  name: 'Home',
  data() {
    return {};
  },
  methods: {
    searchAlert() {}
  }
});
</script>

