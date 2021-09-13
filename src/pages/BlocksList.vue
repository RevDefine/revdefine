 <template>
  <latest-block
    :data="data"
    :loading="loading"
    v-on:request="getBlockData"
  ></latest-block>
</template>

<script lang="ts">
import Vue from 'vue';
import latestBlocks from '../components/LatestBlocks.vue';
import client, { defaultRowsPerPage } from '../defineAPI';

export default Vue.extend({
  components: {
    'latest-block': latestBlocks
  },
  name: 'blocks',
  data() {
    return {
      loading: false,
      data: [
        {
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
          parents: [''],

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
        }
      ]
    };
  },
  methods: {
    async getBlockData(page: number) {
      this.loading = true;
      const latestBlock = await client.showBlocks(1);
      const latestBlockNumber = latestBlock[0].blockNumber;
      const start = latestBlockNumber - page * defaultRowsPerPage;
      const end = latestBlockNumber - (page - 1) * defaultRowsPerPage;
      const blocks = await client.getBlocksByHeight(start, end);
      this.data = blocks.reverse();
      this.loading = false;
    }
  },
  async mounted() {
    await this.getBlockData(1);
  }
});
</script>

