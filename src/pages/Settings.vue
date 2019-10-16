<template>
  <q-page padding>
    <div class="row items-center">
      <div class="col">
        <div class="text-center ">GRPC Porxy Host</div>
      </div>
      <div class="col">
        <q-input
          filled
          v-model="GRPCProxyHost"
          :dense="dense"
          :rules="[
          val => !!val || '* Required',
          val => val.startsWith('http://')|| '* It must be http protocol which is started with *http://* .',
        ]"
        />
      </div>
    </div>

    <div class="row items-center">
      <div class="col">
        <div class="text-center">Websocket Host(not working right now)</div>
      </div>
      <div class="col">
        <q-input
          filled
          :dense="dense"
          v-model="WebsocketHost"
          disable
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
          label="APPLY"
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
      GRPCProxyHost: this.$store.getters.getGRPCProxyHost,
      WebsocketHost: this.$store.getters.getWebsocketHost,
      InitBlockCount: this.$store.getters.getInitBlockCount,
      MaxCachedBlockCount: this.$store.getters.getMaxCachedBlockCount,
      Timeout: this.$store.getters.getTimeout,
      dense: true
    };
  },
  methods: {
    async clickApply() {
      // const b = await client.showBlock('06bc2fcec3db0808edebc902564b5b17aa9f50d775a962f75a05c80690b24ea5');
      this.$store.dispatch('reconfigSettings', {
        GRPCProxyHost: this.GRPCProxyHost,
        WebsocketHost: this.WebsocketHost,
        InitBlockCount: this.InitBlockCount,
        MaxCachedBlockCount: this.MaxCachedBlockCount,
        Timeout: this.Timeout
      });
    }
  }
});
</script>
