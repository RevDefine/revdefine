<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';

export default Vue.extend({
  name: 'searchTransfer',
  methods: {
    async search(deployId: string) {
      this.$q.loading.show();
      const block = await client.findDeploy(deployId);
      this.$router.replace({ name: 'deploy', params: { blockHash: block.blockHash, deployId: deployId } });
      this.$q.loading.hide();
    }
  },
  async mounted() {
    await this.search(this.$route.params.deployId);
  },
  watch: {
    async $route() {
      await this.search(this.$route.params.deployId);
    }
  }
});
</script>

