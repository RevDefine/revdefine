<template>
  <q-input
    borderless
    dense
    filled
    placeholder="Search by blockHash"
    v-model="searchBlockHash"
    v-on:keyup.enter.native="$emit('search', searchBlockHash)"
  >
    <template v-slot:append>
      <q-icon
        name="search"
        v-on:click="$emit('search', searchBlockHash)"
      />
    </template>
  </q-input>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'search-block-bar',
  model: {
    prop: 'blockHash',
    event: 'search'
  },
  data() {
    return {
      searchBlockHash: ''
    };
  }
});
</script>
