<template>
  <div class="q-pa-md">
    <q-table
      :title="$t('Blocks')"
      :data="data"
      :columns="columns"
      :rows-per-page-options="[10, 20, 0]"
      :pagination.sync="pagination"
      :visible-columns="visibleColumns"
      row-key="name"
      selection="multiple"
      grid
      hide-header
    >
      <template v-slot:top-right>
        <search-block-bar
          :alert='alert'
          @search-alert="showBlock"
        ></search-block-bar>
      </template>

      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <q-card>
            <q-list dense>
              <q-item
                v-for="col in props.cols"
                :key="col.name"
              >
                <q-item-section>
                  <q-item-label>{{ $t(col.label) }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label
                    v-if="col.label === 'blockHash'"
                    @click="showBlock(col.value, 'BlockHash')"
                    class="text-primary"
                  ><span class="cursor-pointer">{{ col.value.slice(0, 10) }}</span></q-item-label>
                  <q-item-label v-else-if="col.label === 'timestamp'">{{ convertTimeStamp(col.value) }}</q-item-label>
                  <q-item-label v-else>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SearchType } from '../components/SearchBar.vue';
import SearchAlert from '../components/SearchAlert.vue';
import { timeStampToShortTime } from '../lib/datetime';

export default Vue.extend({
  name: 'ExplorerFront',
  components: {
    'search-block-bar': SearchAlert
  },
  data() {
    return {
      dense: false,
      pagination: {
        rowsPerPage: 0
      },
      visibleColumns: [
        'blockHash',
        'blockSize',
        'blockNumber',
        'deployCount',
        'timestamp',
        'faulTolenrance',
        'sender',
        'version'
      ],
      alert: false,
      columns: [
        {
          name: 'blockHash',
          require: true,
          label: 'blockHash',
          field: 'blockHash'
          // format: (val: string) => `${val.slice(0, 10)}`
        },
        { name: 'blockSize', require: true, label: 'blockSize', field: 'blockSize' },
        { name: 'blockNumber', require: true, label: 'blockNumber', field: 'blockNumber' },
        { name: 'deployCount', require: true, label: 'deployCount', field: 'deployCount' },
        // { name: 'tupleSpaceHash', require: true, label: 'tupleSpaceHash', field: 'tupleSpaceHash' },
        { name: 'timestamp', require: true, label: 'timestamp', field: 'timestamp' },
        {
          name: 'faulTolenrance',
          require: true,
          label: 'faulTolenrance',
          field: 'faultTolerance',
          format: (val: number) => `${val.toString().slice(0, 10)}`
        },
        // { name: 'mainParentHash', require: true, label: 'mainParentHash', field: 'mainParentHash' },
        // { name: 'parentsHashList', require: true, label: 'parentsHashList', field: 'parentsHashList' },
        {
          name: 'sender',
          require: true,
          label: 'sender',
          field: 'sender',
          format: (val: string) => `${val.slice(0, 10)}`
        },
        { name: 'version', require: true, label: 'version', field: 'version' },
        { name: 'fullBlockHash', require: false, label: 'fullBlockHash', field: 'blockHash', visible: false }
      ],
      data: this.$store.state.blockStore.blockArray
    };
  },
  async mounted() {
    this.$q.loading.show();
    try {
      this.$store.dispatch('connectWs');
      await this.$store.dispatch('fetchBlocks', this.$store.getters.getInitBlockCount);
    } catch (e) {
      alert(e);
    } finally {
      // @ts-ignore
      this.$q.loading.hide();
    }
  },
  methods: {
    searchBlock() {},

    async clickShowBlocks() {
      await this.$store.dispatch('fetchBlocks', 20);
    },

    async showBlock(searchHash: string, searchType: SearchType) {
      if (searchType == SearchType.BlockHash) {
        let blockHash = searchHash;
        this.$router.push('/explorer/block/'.concat(blockHash));
      } else if (searchType == SearchType.DeployId) {
        try {
          this.$q.loading.show();
          const block = await this.$store.state.client.findDeploy(searchHash);
          let blockHash = block.blockHash;
          this.$q.loading.hide();
          this.$router.push('/explorer/block/'.concat(blockHash));
        } catch (e) {
          this.alert = true;
        } finally {
          this.$q.loading.hide();
        }
      }
      // this.$router.push('/explorer/block/');
    },
    convertTimeStamp(time: string) {
      // exclude the Sun, Mon ,etc.
      return timeStampToShortTime(time).slice(4);
    }
  }
});
</script>
