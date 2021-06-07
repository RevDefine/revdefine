<i18n>
{
  'en-us':{
    "Validator": "Validator",
    "Stake": "Stake",
    "LatestBlockHash": "LatestBlockHash"
  },
  'zh':{
    "Validator": "验证节点",
    "Stake": "抵押数量",
    "LatestBlockHash": "最新块哈希"
  }
}
</i18n>
<template>
  <q-table
    :title="$t('ValidatorsInfo')"
    :data="validatorsInfo"
    hide-pagination
    :columns="validatorColumn"
    :pagination="pagination"
    flat
  >

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td
          key="validator"
          :props="props"
        >
          {{ props.row.validator.slice(0, 20) + "..."}}
          <q-tooltip>{{props.row.validator}}</q-tooltip>

        </q-td>

        <q-td
          key="stake"
          :props="props"
        >
          {{ props.row.stake }}
        </q-td>

        <q-td
          key="latestBlockHash"
          :props="props"
        >
          <block-link
            :blockHash="props.row.latestBlockHash"
            :length="40"
            :short="true"
          ></block-link>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts">
import Vue from 'vue';
import blockLink from './links/BlockLink.vue';

export default Vue.extend({
  name: 'validator-table',
  components: {
    'block-link': blockLink,
  },
  data() {
    return {
      validatorColumn: [
        {
          name: 'validator',
          required: true,
          label: this.$t('Validator'),
          align: 'left',
          field: 'validator',
        },
        {
          name: 'stake',
          align: 'left',
          label: this.$t('Stake'),
          field: 'stake',
        },
        {
          name: 'latestBlockHash',
          align: 'left',
          label: this.$t('LatestBlockHash'),
          field: 'latestBlockHash',
        },
      ],
      pagination:{
        rowsPerPage: 0
      }
    };
  },
  props: {
    validatorsInfo: {
      type: Array,
    },
  },
});
</script>
