<template>
  <div class="full-width">
    <q-table
      title="Transfers"
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
            <div class="cursor-pointer clickable">
              {{ props.row.blockHash.slice(0, 20) + '...' }}
            </div>
          </q-td>

          <q-td
            key="Age"
            :props="props"
          >
            <timeago
              :datetime="props.row.timestamp"
              :auto-update="5"
            >
            </timeago>
          </q-td>

          <q-td
            key="From"
            :props="props"
          >
            <address-link
              :addr="props.row.fromAddr"
              :short=true
              :length="20"
            ></address-link>
          </q-td>

          <q-td
            key="To"
            :props="props"
          >
            <address-link
              :addr="props.row.toAddr"
              :short=true
              :length="20"
            ></address-link>

          </q-td>

          <q-td
            key="Value"
            :props="props"
          >
            {{ revUnit(props.row.amount) }}
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
      >
      </q-pagination>
    </div>

  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';
import { revUnit } from '../lib';
import defineLoading from './Loading.vue';
import addressLink from './AddressLink.vue';

export default Vue.extend({
  name: 'latestTransfer',
  components: {
    'define-loading': defineLoading,
    'address-link': addressLink
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
        { name: 'Age', align: 'left', label: 'Age', field: 'age' },
        {
          name: 'From',
          align: 'left',
          label: 'From',
          field: 'fromAddr'
        },
        {
          name: 'To',
          align: 'left',
          label: 'To',
          field: 'toAddr'
        },
        {
          name: 'Value',
          align: 'left',
          label: 'Value',
          field: 'amount'
        }
      ],
      data: [
        {
          fromAddr: '',
          toAddr: '',
          amount: 0,
          transactionType: '',
          blockHash: '',
          blockNumber: 0,
          deployId: '',
          timestamp: 0,
          isFinalized: false,
          isSucceeded: false,
          reason: ''
        }
      ],
      loading: false,
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        rowsPerPage: 20
        // rowsNumber: 10
      }
    };
  },
  methods: {
    revUnit: revUnit
  },
  async mounted() {
    this.loading = true;
    const transactions = await client.getLatestTransactions();
    this.data = transactions.transactions;
    this.loading = false;
  }
});
</script>