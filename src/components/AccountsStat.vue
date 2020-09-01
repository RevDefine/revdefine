<i18n>
{
  'en-us':{
    "Total Accounts": "Total Accounts",
    "Last 24 hours active account amount": "Last 24 hours active account amount",
    "Last one week active account amount": "Last one week active account amount",
    "Last one month active account amount": "Last one month active account amount",
  },
  'zh':{
        "Total Accounts": "账户总数量",
    "Last 24 hours active account amount": "过去24小时活跃账户数量",
    "Last one week active account amount": "过去一周活跃账户数量",
    "Last one month active account amount": "过去一个月活跃账户数量",
  }
}
</i18n>

<template>
  <q-list>
    <q-item>
      <q-item-section>{{$t('Total Accounts' + ':')}} </q-item-section>
      <q-item-section>{{totalAccount}}</q-item-section>
    </q-item>

    <q-item>
      <q-item-section>{{$t('Last 24 hours active account amount' + ':')}} </q-item-section>
      <q-item-section>{{last24hActiveAccountAmount}}</q-item-section>
    </q-item>

    <q-item>
      <q-item-section>{{$t('Last one week active account amount' + ':')}} </q-item-section>
      <q-item-section>{{last7dActiveAccountAmount}}</q-item-section>
    </q-item>

    <q-item>
      <q-item-section>{{$t('Last one month active account amount' + ':')}}</q-item-section>
      <q-item-section>{{last1mActiveAccountAmount}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'accountsStat',
  props: {
    totalAccount: Number,
    last24hActiveAccountAmount: Number,
    last7dActiveAccountAmount: Number,
    last1mActiveAccountAmount: Number
  }
})
</script>