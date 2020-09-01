<i18n>
{
  'en-us':{
    "Latest Transfers": "Latest Transfers",
    "Age": "Age",
    "From": "From",
    "To": "To",
    "Value": "Value"
    
  },
  'zh':{
    "Latest Transfers": "最新转账",
    "Age": "转账时间",
    "From": "转出方",
    "To": "转入方",
    "Value": "数量"
  }
}
</i18n>

<template>
  <div class="full-width bg-white">
    <q-table
      :title="$t('Latest Transfers')"
      :data="transactions"
      :columns="columns"
      :pagination.sync="pagination"
      hide-pagination
      :loading="loading"
      flat
      bordered=false
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ $t(col.label) }}
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
import blockLink from './links/BlockLink.vue';

export default Vue.extend({
  name: 'latestTransfer',
  components: {
    'define-loading': defineLoading,
    'address-link': addressLink,
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
          name: 'blockHash',
          required: true,
          label: 'BlockHash',
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