<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class='text-h6'>{{$t('InputYourRevAddrOrEthAddr')}}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          padding
          v-model="revAddress"
          :label="$t('RevAddress')"
          :rules="[val => verifyRevAddress(val) || $t('YourRevAddressIsNotValid')]"
          lazy-rules
        />
      </q-card-section>

      <q-card-section>
        <q-input
          padding
          v-model="ethAddress"
          :label="$t('EthAddress')"
          :rules="[val => this.verifyEthAddress(val) || $t('YourEthAddressIsNotValid')]"
          lazy-rules
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          no-caps
          color="secondary"
          :label="$t('CheckBalance')"
          @click="checkBalance(revAddress, ethAddress)"
        />
      </q-card-section>

      <q-card-section>
        <div class="text-body1"> 
          {{$t('BalanceOfYourAddress') }}
          <div class="text-body1 text-weight-bolder" style="word-break: break-all;">{{checkAddress}}</div>
          {{$t('is')}}
          <div class="text-body1 text-weight-bolder">{{balance}}</div>
        </div>
      </q-card-section>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>

        <q-card-section>
          <div class="text-h6">
            {{$t('YourInputAddressIsNotValidAddress')}}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import {verifyRevAddr, getAddrFromEth} from '../lib/rnode-address';
import RChainApi from '../client/api'

export default Vue.extend({
  name: 'Rev',
  data() {
    return {
      revAddress: '',
      ethAddress: '',
      checkAddress: ' ',
      balance: 0,
      alert: false
    };
  },
  methods:{
    async checkBalance(revAddress: string, ethAddress: string){
      var checkAddress = ''
      if(this.verifyRevAddress(revAddress)){
        checkAddress = revAddress
      } else{
        if(this.verifyEthAddress(ethAddress)){
          checkAddress = getAddrFromEth(ethAddress)
        }
      }
      if(checkAddress == ''){
        this.alert = true
      } else{
        const apiClient = new RChainApi(this.$store.state.client)
        const balance = await apiClient.checkBalance(checkAddress)
        this.balance = balance
        this.checkAddress = checkAddress
      }
    },
    verifyRevAddress(address: string): boolean{
      // @ts-ignore
      return verifyRevAddr(address);
    },
    verifyEthAddress(address: string):boolean{
      const normalizedAddr = address.toLowerCase()
      if (!/^(0x)?[0-9a-f]{40}$/i.test(normalizedAddr)) {
        // check if it has the basic requirements of an address
        return false;
      } else if (/^(0x)?[0-9a-f]{40}$/.test(normalizedAddr) || /^(0x)?[0-9A-F]{40}$/.test(normalizedAddr)) {
        // If it's all small caps or all all caps, return true
        return true;
      } else {
        // Otherwise check each case
        return false
        // 
        // return isChecksumAddress(address);
      }
    }
  }
});
</script>