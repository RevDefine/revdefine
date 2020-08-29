<template>
  <div class="full-width">
    <q-table
      title="Transfer"
      :data="transactions"
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
            key="from"
            :props="props"
          >
            <address-link
              :addr="props.row.fromAddr"
              :short=true
              :length="10"
            ></address-link>
          </q-td>

          <q-td
            key="to"
            :props="props"
          >
            <address-link
              :addr="props.row.toAddr"
              :short=true
              :length="10"
            ></address-link>
          </q-td>

          <q-td
            key="amount"
            :props="props"
          >
            {{ revUnit(props.row.amount) + " Rev" }}
          </q-td>

          <q-td
            key="type"
            :props="props"
          >
            {{ props.row.transactionType }}
          </q-td>

          <q-td
            key="blockHash"
            :props="props"
          >
            <block-link
              :blockHash="props.row.blockHash"
              :short="true"
              :length="10"
            ></block-link>
          </q-td>

          <q-td
            key="blockNumber"
            :props="props"
          >
            {{ props.row.blockNumber }}
          </q-td>

          <q-td
            key="deployId"
            :props="props"
          >
            <deploy-link
              :blockHash="props.row.blockHash"
              :deployId="props.row.deployId"
              :short="true"
              :length="10"
            ></deploy-link>
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
            key="success"
            :props="props"
          >
            {{ props.row.isSucceeded }}
          </q-td>

          <q-td
            key="finalized"
            :props="props"
          >
            {{ props.row.isFinalized }}
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
import addressLink from './links/AddressLink.vue';
import deployLink from './links/DeployLink.vue';
import blockLink from './links/BlockLink.vue';

export default Vue.extend({
  name: 'transferList',
  components: {
    'define-loading': defineLoading,
    'address-link': addressLink,
    'deploy-link': deployLink,
    'block-link': blockLink
  },
  props: {
    transactions: Array,
    loading: Boolean
  },
  data() {
    return {
      columns: [
        {
          name: 'from',
          required: true,
          label: 'from',
          align: 'left',
          field: 'fromAddr'
        },
        { name: 'to', align: 'left', label: 'to', field: 'toAddr' },
        { name: 'amount', align: 'left', label: 'amount', field: 'amount' },
        {
          name: 'type',
          align: 'left',
          label: 'type',
          field: 'type'
        },
        {
          name: 'blockHash',
          align: 'left',
          label: 'blockHash',
          field: 'blockHash'
        },
        { name: 'blockNumber', align: 'left', label: 'blockNumber', field: 'blockNumber' },
        { name: 'deployId', align: 'left', label: 'deployId', field: 'deployId' },
        { name: 'timestamp', align: 'left', label: 'timestamp', field: 'timestamp' },
        { name: 'success', align: 'left', label: 'success', field: 'success' },
        { name: 'finalized', align: 'left', label: 'finalized', field: 'finalized' }
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