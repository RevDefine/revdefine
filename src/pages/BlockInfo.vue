<template>
  <router-view
    v-bind:loading="loading"
    v-bind:blockInfoDetail="blockInfoDetail"
  ></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';
export default Vue.extend({
  name: 'blocks',
  data() {
    return {
      loading: false,
      blockInfoDetail: {
        blockInfo: {
          blockHash: '',
          sender: '',
          seqNum: 0,
          sig: '',
          sigAlgorithm: '',
          shardId: '',
          extraBytes: '',

          // HeaderProto message
          version: 0,
          timestamp: 0,
          headerExtraBytes: '',
          parentsHashList: [''],

          // BodyProto message
          blockNumber: 0,
          preStateHash: '',
          postStateHash: '',
          bodyExtraBytes: '',
          bonds: [{ validator: '', stake: 0 }],

          // extra
          blockSize: '',
          deployCount: 0,
          faultTolerance: 0
        },
        deploys: [
          {
            deployer: '',
            term: '',
            timestamp: 0,
            sig: '',
            sigAlgorithm: '',
            phloPrice: 1,
            phloLimit: 1,
            validAfterBlockNumber: 1,
            cost: 1,
            errored: false,
            systemDeployError: ''
          }
        ]
      }
    };
  },
  methods: {
    async getBlockData() {
      this.loading = true;
      const block = await client.showBlock(this.$route.params.blockHash);
      this.blockInfoDetail = block;
      this.loading = false;
    }
  },
  async mounted() {
    await this.getBlockData();
  },
  watch: {
    async $route() {
      await this.getBlockData();
    }
  }
});
</script>

