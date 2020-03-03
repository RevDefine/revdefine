<template>
  <q-toolbar>
    <q-btn-dropdown
      :label="$t(searchType)"
      no-caps
    >
      <q-list>
        <q-item
          clickable
          v-close-popup
          @click="searchType='BlockHash'"
        >
          <q-item-section>
            <q-item-label>{{$t('BlockHash')}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-close-popup
          @click="searchType='DeployId'"
        >
          <q-item-section>
            <q-item-label>{{$t('DeployId')}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>

    <q-input
      borderless
      dense
      filled
      :placeholder="$t('Search')"
      v-model="searchHash"
      v-on:keyup.enter.native="$emit('search', searchHash, searchType)"
    >
      <template v-slot:append>
        <q-icon
          name="search"
          v-on:click="$emit('search', searchHash, searchType)"
        />
      </template>
    </q-input>
  </q-toolbar>
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