<template>
  <div class="full-width">
    <q-table
      title="Blocks"
      :data="data"
      :columns="columns"
      :pagination.sync="pagination"
      hide-pagination
      :loading="loading"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            key="blockHash"
            :props="props"
          >
            <block-link
              :blockHash="props.row.blockHash"
              :short="true"
              :length="20"
            ></block-link>
          </q-td>

          <q-td
            key="blockSize"
            :props="props"
          >
            {{props.row.blockSize}}
          </q-td>

          <q-td
            key="blockNumber"
            :props="props"
          >
            {{ props.row.blockNumber}}
          </q-td>

          <q-td
            key="deployCount"
            :props="props"
          >
            {{ props.row.deployCount }}
          </q-td>

          <q-td
            key="seqNum"
            :props="props"
          >
            {{ props.row.seqNum }}
          </q-td>

          <q-td
            key="timestamp"
            :props="props"
          >
            <timeago
              :datetime="props.row.timestamp"
              :auto-update="5"
            >
            </timeago>
          </q-td>

          <q-td
            key="sender"
            :props="props"
          >
            {{ props.row.sender.slice(0, 20) + "..." }}
          </q-td>
        </q-tr>

      </template>
      <template v-slot:loading>
        <define-loading :showing="loading"></define-loading>
      </template>
    </q-table>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        :max="50"
        :max-pages="6"
        :boundary-links="true"
        @input="onRequest"
      >
      </q-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { revUnit } from '../lib';
import defineLoading from './Loading.vue';
import blockLink from './links/BlockLink.vue';

export default Vue.extend({
  name: 'latestBlocks',
  components: {
    'define-loading': defineLoading,
    'block-link': blockLink
  },
  props: {
    data: Array,
    loading: Boolean
  },
  data() {
    return {
      columns: [
        {
          name: 'blockHash',
          required: true,
          label: 'blockHash',
          align: 'left',
          field: 'blockHash'
        },
        { name: 'blockSize', align: 'left', label: 'blockSize', field: 'blockSize' },
        {
          name: 'blockNumber',
          align: 'left',
          label: 'blockNumber',
          field: 'blockNumber'
        },
        {
          name: 'deployCount',
          align: 'left',
          label: 'deployCount',
          field: 'deployCount'
        },
        {
          name: 'seqNum',
          align: 'left',
          label: 'seqNum',
          field: 'seqNum'
        },
        {
          name: 'timestamp',
          align: 'left',
          label: 'timestamp',
          field: 'timestamp'
        },
        {
          name: 'sender',
          align: 'left',
          label: 'sender',
          field: 'sender'
        }
      ],
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        // this is not relying on the q-table pagination to get page
        rowsPerPage: 0
        // rowsNumber: 10
      }
    };
  },
  methods: {
    revUnit: revUnit,
    onRequest(page: number) {
      this.$emit('request', page);
    }
  }
});
</script>