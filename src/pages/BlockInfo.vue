<template>
  <router-view
    v-bind:loading="loading"
    v-bind:block-info-detail="blockInfoDetail"
    v-bind:validators-info="validatorsInfo"
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
          faultTolerance: 0,
          justifications: [{ validator: '', latestBlockHash: '' }],
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
            systemDeployError: '',
          },
        ],
      },
      validatorsInfo: [{ validator: '', stake: 0, latestBlockHash: '' }],
    };
  },
  methods: {
    async getBlockData() {
      try {
        this.loading = true;
        const block = await client.showBlock(this.$route.params.blockHash);
        this.blockInfoDetail = block;
        let validators = [];
        for (let i = 0; i < block.blockInfo.bonds.length; i++) {
          validators.push({
            ...block.blockInfo.bonds[i],
            ...block.blockInfo.justifications.find((v) => v.validator == block.blockInfo.bonds[i].validator),
          });
        }
        // @ts-ignore
        this.validatorsInfo = validators;
        this.loading = false;
      } catch {
        this.$router.push({ name: 'notFound' });
      }
    },
  },
  async mounted() {
    await this.getBlockData();
  },
  watch: {
    async $route() {
      await this.getBlockData();
    },
  },
});
</script>

