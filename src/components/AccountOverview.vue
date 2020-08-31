<i18n>
{
  'en-us':{
    "Address": "address",
    "Balance": "balance",
    "IsGenesisVault": "isGenesisAddresss",
    "LastOperationBlock": "lastOperationBlock",
    "Account": "RevAccount"
  },
  'zh':{
    "Address": "地址",
    "Balance": "余额",
    "IsGenesisVault": "创世钱包",
    "LastOperationBlock": "上次转账区块",
    "Account": "Rev帐户"
  }
}
</i18n>
<template>
  <q-card
    bordered
    class="full-width"
  >
    <div>
      <define-loading :showing="loading"></define-loading>
    </div>

    <q-card-section>
      <div class="text-h6">{{$t('Account')}}</div>
    </q-card-section>

    <q-separator
      dark
      inset
    />

    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>{{$t('Address')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              {{ address }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>{{$t('Balance')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              {{ revUnit(balance) + ' Rev' }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>{{$t('IsGenesisVault')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              {{ isGenesisAddress }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>{{$t('LastOperationBlock')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              <block-link
                :blockHash="lastOperationBlock"
                :short="false"
              ></block-link>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';
import defineLoading from './Loading.vue';
import blockLink from './links/BlockLink.vue';
import { revUnit } from '../lib';
export default Vue.extend({
  name: 'accountOverview',
  components: {
    'define-loading': defineLoading,
    'block-link': blockLink
  },
  props: {
    addr: String
  },
  data() {
    return {
      address: '',
      balance: 0,
      isGenesisAddress: false,
      lastOperationBlock: '',

      loading: false
    };
  },
  methods: {
    async getOverviewData() {
      this.loading = true;
      const account = await client.revAccount(this.$route.params.addr);
      this.address = account.account.address;
      this.balance = account.account.balance;
      this.isGenesisAddress = account.account.isGenesisVault;
      this.lastOperationBlock = account.account.lastOperationBlock;
      this.loading = false;
    },
    revUnit: revUnit
  },
  async mounted() {
    await this.getOverviewData();
  },
  watch: {
    async $route() {
      await this.getOverviewData();
    }
  }
});
</script>

<style lang="sass" scoped>
</style>