<i18n>
{
  'en-us':{
    "from": "from",
    "to": "to",
    "amount": "amount",
    "type": "type",
    "blockHash": "blockHash",
    "blockNumber": "blockNumber",
    "deployId": "deployId",
    "timestamp": "timestamp",
    "success": "success",
    "finalized": "finalized",
    "Transfer": "Transfer",
    "deploy": "deploy",
    "transfer": "transfer",
    "genesis": "genesis",
    "bond": "bond",
    "Transfer failed reason": "Transfer failed reason",
    "Insufficient funds": "Insufficient funds",
    "In": "In",
    "Out": "Out"
  },
  'zh':{
    "from": "转出方",
    "to": "转入方",
    "amount": "数量",
    "type": "类型",
    "blockHash": "区块哈希",
    "blockNumber": "区块高度",
    "deployId": "部署ID",
    "timestamp": "时间戳",
    "success": "成功",
    "finalized": "确认",
    "Transfer": "转账",
    "deploy": "部署",
    "transfer": "转账",
    "genesis": "创世",
    "bond": "加入验证节点",
    "Transfer failed reason": "转账失败原因",
    "Insufficient funds": "余额不足",
    "In": "转入",
    "Out": "转出"
  }
}
</i18n>

<template>
  <div class="full-width bg-white q-pb-sm">
    <q-table
      :title="$t('Transfer')"
      :data="transactions"
      :columns="columns"
      :pagination.sync="pagination"
      hide-pagination
      :loading="loading"
      flat
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
            key="direction"
            :props="props"
          >
            <template v-if="props.row.fromAddr == address">
              <q-badge
                outline
                color="warning"
              >{{$t('Out')}}</q-badge>
            </template>
            <template v-else>
              <q-badge
                outline
                color="info"
              >{{$t('In')}}</q-badge>
            </template>
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
            {{ $t(props.row.transactionType) }}
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
            <q-tooltip>{{Date(props.row.timestamp)}}</q-tooltip>
          </q-td>

          <q-td
            key="success"
            :props="props"
            @click="addExpanded(props)"
          >
            <div class="row cursor-pointer justify-center">
              <define-bool
                :yesOrNo="props.row.isSucceeded"
                red
              >
              </define-bool>
              <template v-if="!props.row.isSucceeded">
                <q-icon name="keyboard_arrow_down"></q-icon>
              </template>
            </div>
          </q-td>

          <q-td
            key="finalized"
            :props="props"
          >
            <define-bool
              :yesOrNo="props.row.isFinalized"
              red
            >
            </define-bool>
          </q-td>
        </q-tr>

        <q-tr
          v-show="isExpanded(props.rowIndex)"
          :props="props"
        >
          <q-td colspan="100%">
            <div class="text-left">{{$t("Transfer failed reason")}}: {{ $t(props.row.reason) }}.</div>
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
        :max="max"
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
import defineBool from './BoolItem.vue';

export default Vue.extend({
  name: 'transferList',
  components: {
    'define-loading': defineLoading,
    'address-link': addressLink,
    'deploy-link': deployLink,
    'block-link': blockLink,
    'define-bool': defineBool,
  },
  props: {
    transactions: Array,
    loading: Boolean,
    max: {
      type: Number,
      default: 50,
    },
    address: String,
  },
  data() {
    return {
      expanded: [false],
      columns: [
        {
          name: 'from',
          required: true,
          label: 'from',
          align: 'left',
          field: 'fromAddr',
        },
        {
          name: 'direction',
          label: '',
          align: 'left',
          field: '',
        },
        { name: 'to', align: 'left', label: 'to', field: 'toAddr' },
        { name: 'amount', align: 'left', label: 'amount', field: 'amount' },
        {
          name: 'type',
          align: 'left',
          label: 'type',
          field: 'type',
        },
        {
          name: 'blockHash',
          align: 'left',
          label: 'blockHash',
          field: 'blockHash',
        },
        { name: 'blockNumber', align: 'left', label: 'blockNumber', field: 'blockNumber' },
        { name: 'deployId', align: 'left', label: 'deployId', field: 'deployId' },
        { name: 'timestamp', align: 'left', label: 'timestamp', field: 'timestamp' },
        { name: 'success', align: 'left', label: 'success', field: 'success' },
        { name: 'finalized', align: 'left', label: 'finalized', field: 'finalized' },
      ],
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        // this is not relying on the q-table pagination to get page
        rowsPerPage: 0,
        // rowsNumber: 10
      },
    };
  },
  methods: {
    revUnit: revUnit,
    onRequest(page: number) {
      this.$emit('request', page);
    },
    // @ts-ignore
    addExpanded(props) {
      if (!props.row.isSucceeded) {
        const original = this.expanded[props.rowIndex];
        this.expanded.splice(props.rowIndex, 1, !original);
      }
    },
    isExpanded(i: number) {
      return this.expanded[i];
    },
  },
  created() {
    this.expanded = this.transactions.map(() => false);
  },
});
</script>
<style lang="sass" scoped>
$in-transfer : #02977e
$out-transfercolor: #b47d00
</style>