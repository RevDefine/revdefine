<i18n>
{
  'en-us':{
    "Search blockHash, blockNumber, deployId, revAddress": "Search BlockHash, BlockNumber, DeployId, RevAddress",
    "Not Found": "Not Found"
  },
  'zh':{
    "Search blockHash, blockNumber, deployId, revAddress": "搜索区块哈希，区块高度，部署ID, Rev地址",
    "Not Found": "无法找到"
  }
}
</i18n>
<template>
  <div class="row col-xs-12 col-sm-12 col-md-12 justify-center items-center search-bg rounded">
    <div class="col-md-6 col-sm-8 col-xs-10">
      <h4 style="color: white">{{$t('Not Found')}}</h4>
      <q-input
        rounded
        outlined
        dense
        clearable
        bg-color="white"
        :placeholder="$t('Search blockHash, blockNumber, deployId, revAddress')"
        v-model="searchHash"
        v-on:keyup.enter.native="$emit('search', searchHash)"
      >
        <template v-slot:prepend>
          <q-icon
            name="search"
            v-on:click="$emit('search', searchHash)"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'not-found',
  model: {
    event: 'search',
  },
  data() {
    return {
      searchHash: '',
    };
  },
});
</script>

<style lang="sass" scoped>
.search-bg
  background-image: url('~assets/no-fonud-bc.png')
  max-width: 1200px
  height: 500px
.rounded
  border-radius: 8px
</style>