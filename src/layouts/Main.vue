<template>
  <q-layout view="hHh lpr fFf">
    <q-header
      elevated
      class="bg-black"
    >
      <q-toolbar>
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
        />
        <q-toolbar-title>RevDefine</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            to="/explorer/front"
          >
            <q-item-section avatar>
              <q-icon name="vertical_split" />
            </q-item-section>

            <q-item-section>
              Explorer
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/genesisWallet"
          >
            <q-item-section avatar>
              <q-icon name="euro_symbol" />
            </q-item-section>

            <q-item-section>
              GenesisWallet
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/settings"
          >
            <q-item-section avatar>
              <q-icon name="settings_applications" />
            </q-item-section>

            <q-item-section>
              Settings
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainLayout',

  data() {
    return {
      drawer: false,
      miniState: true
    };
  }
});
</script>
