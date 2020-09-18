 <i18n>
{
  'en-us':{
    "Not Found": "Not Found"
  },
  'zh':{
    "Not Found": "无法找到"
  }
}
</i18n>
 <template>
  <div class="row col-xs-12 col-sm-12 col-md-12 justify-center items-center not-found-bg rounded">
    <div class="row col-xs-12 col-sm-12 col-md-12 justify-center items-center">
      <h4 style="color: white">{{$t('Not Found')}}</h4>
      <search-bar @search="search"></search-bar>
    </div>
    <define-loading :showing="loading"></define-loading>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import searchBar from '../components/SearchBar.vue';
import defineLoading from '../components/Loading.vue';
import { StringType, judgeSearchString } from '../lib';
import { getAddrFromEth } from '../lib/rnode-address';
import client from '../defineAPI';

export default Vue.extend({
  name: 'NotFound',
  components: {
    'search-bar': searchBar,
    'define-loading': defineLoading,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async search(target: string) {
      this.loading = true;
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
});
</script>

<style lang="sass" scoped>
.not-found-bg
  background-image: url('~assets/no-fonud-bc.png')
  max-width: 1200px
  height: 500px
.rounded
  border-radius: 8px
</style>