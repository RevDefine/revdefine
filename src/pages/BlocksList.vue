 <template>
  <latest-block
    :data="data"
    :loading="loading"
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
        }
      ]
    };
  },
  methods: {
    async getBlockData(page: number) {
      this.loading = true;
      const blocks = await client.showBlocks(defaultRowsPerPage);
      this.data = blocks;
      this.loading = false;
    }
  },
  async mounted() {
    await this.getBlockData(1);
  }
});
</script>

