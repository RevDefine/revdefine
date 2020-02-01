<template>
  <div class="q-pa-md">
    <q-table
      title="genesisWallet"
      :data="genesisVaults"
      :columns="columns"
      row-key="genesisWallet"
      :filter="filter"
      :rows-per-page-options="[20, 50]"
      :pagination.sync="pagination"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
// import { parse } from 'papaparse';
import revClient from '../revClient/revClient';

export default {
  name: 'genesisWallet',
  data () {
    return {
      pagination: {
        rowsPerPage: 20
      },
      filter: '',
      genesisVaults: [],
      columns: [
        { name: 'pk', required: true, label: 'Public Key', field: row => row.pk, sortable: true },
        { name: 'amount', required: true, label: 'Amount', field: row => row.amount, sortable: true },
      ]
    };
  },
  async mounted () {
    this.genesisVaults = await revClient.getGenesisWallet();
  }
}
</script>
