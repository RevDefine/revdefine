<template>
  <div>
    <found-alert-dialog :alert='alert'></found-alert-dialog>
    <search-bar @search='searchAlert'></search-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FoundAlert from './FoundAlert.vue';
import SearchBlockBar, { SearchType } from './SearchBar.vue';

export default Vue.extend({
  name: 'search-alert',
  components: {
    'search-bar': SearchBlockBar,
    'found-alert-dialog': FoundAlert
  },
  props: {
    alert: Boolean
  },
  methods: {
    searchAlert(searchHash: string, searchType: SearchType) {
      this.$emit('search-alert', searchHash, searchType);
    }
  }
});
</script>