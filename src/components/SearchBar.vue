<template>
  <div class="row col-xs-12 col-sm-12 col-md-12 justify-center items-center search-bg">
    <div class="col-md-6 col-sm-8 col-xs-10">
      <q-input
        rounded
        outlined
        dense
        clearable
        bg-color="white"
        :placeholder="$t('Search')"
        v-model="searchHash"
        v-on:keyup.enter.native="$emit('search', searchHash, searchType)"
      >
        <template v-slot:prepend>
          <q-icon
            name="search"
            v-on:click="$emit('search', searchHash, searchType)"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export enum SearchType {
  BlockHash = 'BlockHash',
  DeployId = 'DeployId'
}

export default Vue.extend({
  name: 'search-block-bar',
  model: {
    event: 'search'
  },
  data() {
    return {
      searchHash: '',
      searchType: SearchType.BlockHash
    };
  }
});
</script>

<style lang="sass" scoped>
.search-bg
  background-image: url('~assets/searching-bc.png')
  max-width: 1200px
  height: 160px
</style>