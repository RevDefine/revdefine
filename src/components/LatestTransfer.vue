<template>
  <div class="full-width">
    <define-table>
    </define-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import DTable from './DTable.vue';

export default Vue.extend({
  name: 'latestTransfer',
  components: {
    'define-table': DTable
  },
  data() {
    return {};
  }
});
</script>