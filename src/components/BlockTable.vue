<template>
  <define-table>
  </define-table>
</template>
<script lang="ts">
import Vue from 'vue';
import DTable from './DTable.vue';

export default Vue.extend({
  name: 'blockTable',
  components: {
    'define-table': DTable
  },
  data() {
    return {};
  }
});
</script>