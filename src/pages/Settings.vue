<template>
  <q-page padding>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Connect Error</div>
        </q-card-section>

        <q-card-section>
          The server you provided can not be acceesed. Make sure it is a rnode http server.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="row justify-center q-pa-md">
      <q-btn-dropdown no-caps :label="$t('TestnetServer')">
        <q-list>
          <q-item clickable v-close-popup v-for="server in testnetServerList" v-bind:key="server[0]" @click="onServerSelect(server)">
            <q-item-section>
              <q-item-label>{{ server[0] }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-separator vertical spaced />

      <q-btn-dropdown no-caps :label="$t('MainnetServer')">
        <q-list>
          <q-item clickable v-close-popup v-for="server in mainnetServerList" v-bind:key="server[0]" @click="onServerSelect(server)">
            <q-item-section>
              <q-item-label>{{ server[0] }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">{{ $t('HttpHostSetting') }}</div>
      </div>
      <div class="col">
        <q-input filled :dense="dense" v-model="HttpHost" :rules="[
            val => !!val || '* Required',
            val => val.match('^https?://') || '* It must be http protocol which is started with *http://* or *https://*.' ,
          ]" />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">{{ $t('EnableWebsocket') }}</div>
      </div>
      <div class="col">
        <q-toggle v-model="EnableWebsocket" :label="`${EnableWebsocket}`" false-value="NO" true-value="YES" />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">{{ $t('InitBlockCount') }}</div>
      </div>
      <div class="col">
        <q-input filled :dense="dense" v-model="InitBlockCount" :rules="[val => !isNaN(val) || '* It must be a number']" />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">{{ $t('MaxCachedBlockCount') }}</div>
      </div>
      <div class="col">
        <q-input filled :dense="dense" v-model="MaxCachedBlockCount" :rules="[val => !isNaN(val) || '* It must be a number']" />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">{{ $t('Timeout') }}</div>
      </div>
      <div class="col">
        <q-input filled :dense="dense" v-model="Timeout" :rules="[val => !isNaN(val) || '* It must be a number']" />
      </div>
    </div>

    <div class="row justify-center">
      <div>
        <q-btn color="primary" :label="$t('ApplyConnect')" @click="clickApply" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SettingsPage',
  data() {
    return {
      HttpHost: this.$store.getters.getHttpHost,
      InitBlockCount: this.$store.getters.getInitBlockCount,
      MaxCachedBlockCount: this.$store.getters.getMaxCachedBlockCount,
      Timeout: this.$store.getters.getTimeout,
      EnableWebsocket: this.$store.getters.getEnableWebsocket,
      dense: true,
      alert: false,
      testnetServerList: [
        ['observer.testnet', 'https://observer.testnet.rchain.coop']
        // ['node1.testnet', 'http://node1.testnet.rchain-dev.tk:40403'],
        // ['node2.testnet', 'http://node2.testnet.rchain-dev.tk:40403'],
        // ['node3.testnet', 'http://node3.testnet.rchain-dev.tk:40403'],
        // ['node4.testnet', 'http://node4.testnet.rchain-dev.tk:40403']
      ],
      mainnetServerList: [
        ['observer', 'https://observer.services.mainnet.rchain.coop'],
        ['observer-asia', 'https://observer-asia.services.mainnet.rchain.coop'],
        ['observer-us', 'https://observer-us.services.mainnet.rchain.coop'],
        ['observer-eu', 'https://observer-eu.services.mainnet.rchain.coop']
      ]
    };
  },
  methods: {
    async clickApply() {
      // const b = await client.showBlock('06bc2fcec3db0808edebc902564b5b17aa9f50d775a962f75a05c80690b24ea5');
      this.$store.dispatch('reconfigSettings', {
        HttpHost: this.HttpHost,
        InitBlockCount: this.InitBlockCount,
        MaxCachedBlockCount: this.MaxCachedBlockCount,
        Timeout: this.Timeout,
        EnableWebsocket: this.EnableWebsocket
      });
      // @ts-ignore
      this.$q.loading.show();
      try {
        this.$store.dispatch('connectWs');
        await this.$store.dispatch('fetchBlocks', this.$store.getters.getInitBlockCount);
        this.$router.push({ path: '/explorer/front' });
      } catch (e) {
        this.alert = true;
      } finally {
        // @ts-ignore
        this.$q.loading.hide();
      }
    },
    async onServerSelect(server: string[]) {
      this.HttpHost = server[1];
    }
  }
});
</script>
