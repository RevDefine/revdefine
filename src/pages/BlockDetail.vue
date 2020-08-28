<template>
  <block-detail></block-detail>
</template>

<script lang="ts">
import Vue from 'vue';
import blockDetail from '../components/BlockDetail.vue';

export default Vue.extend({
  components: {
    'block-detail': blockDetail
  },
  name: 'blocks',
  data() {
    return {};
  }
});
</script>

