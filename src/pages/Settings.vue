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
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="row justify-center q-pa-md">
      <q-btn-dropdown
        no-caps
        label="Predefined Testnet Server"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            v-for="server in serverList"
            v-bind:key="server[0]"
            @click="onServerSelect(server)"
          >
            <q-item-section>
              <q-item-label>{{server[0]}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">Http Host</div>
      </div>
      <div class="col">
        <q-input
          filled
          :dense="dense"
          v-model="HttpHost"
          :rules="[
          val => !!val || '* Required',
          val => val.startsWith('http://')|| '* It must be http protocol which is started with *http://* .',
        ]"
        />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">Init Block Count</div>
      </div>
      <div class="col">
        <q-input
          filled
          :dense="dense"
          v-model="InitBlockCount"
          :rules="[val => !isNaN(val) || '* It must be a number']"
        />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">Max Cached Block Count</div>
      </div>
      <div class="col">
        <q-input
          filled
          :dense="dense"
          v-model="MaxCachedBlockCount"
          :rules="[val => !isNaN(val) || '* It must be a number']"
        />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">Timeout</div>
      </div>
      <div class="col">
        <q-input
          filled
          :dense="dense"
          v-model="Timeout"
          :rules="[val => !isNaN(val) || '* It must be a number']"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div>
        <q-btn
          color="primary"
          label="Apply and Connect"
          @click="clickApply"
        />
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
      dense: true,
      alert: false,
      serverList: [
        ['node0.testnet', 'node0.testnet.revdefine.io', 'node0.testnet.rchain-dev.tk:40403'],
        ['node1.testnet', 'node1.testnet.revdefine.io', 'node1.testnet.rchain-dev.tk:40403'],
        ['node2.testnet', 'node2.testnet.revdefine.io', 'node2.testnet.rchain-dev.tk:40403'],
        ['node3.testnet', 'node3.testnet.revdefine.io', 'node3.testnet.rchain-dev.tk:40403'],
        ['node4.testnet', 'node4.testnet.revdefine.io', 'node4.testnet.rchain-dev.tk:40403'],
        // ['node5.testnet', 'node5.testnet.revdefine.io', 'node5.testnet.rchain-dev.tk:40403'],
        // ['node6.testnet', 'node6.testnet.revdefine.io', 'node6.testnet.rchain-dev.tk:40403'],
        // ['node7.testnet', 'node7.testnet.revdefine.io', 'node7.testnet.rchain-dev.tk:40403'],
        // ['node8.testnet', 'node8.testnet.revdefine.io', 'node8.testnet.rchain-dev.tk:40403'],
        // ['node9.testnet', 'node9.testnet.revdefine.io', 'node9.testnet.rchain-dev.tk:40403']
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
        Timeout: this.Timeout
      });
      // @ts-ignore
      this.$q.loading.show();
      try {
        await this.$store.dispatch('fetchBlocks', this.$store.getters.getInitBlockCount);
      } catch (e) {
        this.alert = true;
      } finally {
        // @ts-ignore
        this.$q.loading.hide();
        this.$router.push({path:'/explorer/front'});
      }
    },
    async onServerSelect(server: string[]) {
      this.HttpHost = 'http://' + server[2];
    }
  }
});
</script>
