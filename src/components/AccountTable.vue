<template>
  <div class="full-width bg-white">
    <q-table
      title="Accounts"
      :data="accounts"
      :columns="columns"
      :pagination.sync="pagination"
      hide-pagination
      :loading="loading"
      class="q-mx-md q-my-md"
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
            key="address"
            :props="props"
          >
            <address-link
              :addr="props.row.address"
              :short=false
              :length="20"
            ></address-link>
          </q-td>

          <q-td
            key="balance"
            :props="props"
          >
            {{ revUnit(props.row.balance) + " Rev" }}
          </q-td>

          <q-td
            key="isGenesisVault"
            :props="props"
          >
            {{ props.row.isGenesisVault }}
          </q-td>
          <q-td
            key="lastOperationBlock"
            :props="props"
          >
            <block-link
              :blockHash="props.row.lastOperationBlock"
              :short="false"
            >
            </block-link>
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
  name: 'accountTable',
  components: {
    'define-loading': defineLoading,
    'address-link': addressLink,
    'block-link': blockLink
  },
  props: {
    accounts: Array,
    loading: Boolean
  },
  data() {
    return {
      columns: [
        {
          name: 'address',
          required: true,
          label: 'address',
          align: 'left',
          field: 'address'
        },
        { name: 'balance', align: 'left', label: 'balance', field: 'balance' },
        {
          name: 'isGenesisVault',
          align: 'left',
          label: 'isGenesisVault',
          field: 'isGenesisVault'
        },
        {
          name: 'lastOperationBlock',
          align: 'left',
          label: 'lastOperationBlock',
          field: 'lastOperationBlock'
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