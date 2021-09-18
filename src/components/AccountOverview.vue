<i18n>
{
  'en-us':{
    "Address": "Address",
    "Balance": "Balance",
    "Account": "REVAccount"
  },
  'zh':{
    "Address": "地址",
    "Balance": "余额",
    "Tags": "标签",
    "Account": "REV帐户",
    "GenesisVault": "创世地址",
    "PosStakingVault": "抵押地址",
    "CoopMultiSigVault": "Coop多签地址",
    "PerValidatorVault": "验证者地址"
  }
}
</i18n>
<template>
  <q-card
    class="full-width"
    flat
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

          <q-item-section side class="col-xs-8 break-hash">
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
              {{ revUnit(balance) + ' REV' }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>{{$t('Tags')}}</q-item-label>
          </q-item-section>

          <q-item-section side class="col-xs-8 break-hash">
            <q-list dense>
              <q-item
                v-for="tag in tags"
                :key="tag"
              >
                {{$t(tag)}}
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';
import defineLoading from './Loading.vue';
import { revUnit } from '../lib';

export default Vue.extend({
  name: 'accountOverview',
  components: {
    'define-loading': defineLoading,
  },
  props: {
    address: String,
    balance: Number,
    tags: Array,
    loading: Boolean
  },
  methods: {
    revUnit: revUnit
  }
});
</script>

<style lang="sass" scoped>
</style>