<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>RevDefine</q-toolbar-title>

        <q-space />

        <q-btn-dropdown no-caps :label="lang">
          <q-list>
            <q-item
              clickable
              v-close-popup
              v-for="lang in langOptions"
              v-bind:key="lang.value"
              @click="onLangSelect(lang)"
            >
              <q-item-section>
                <q-item-label>{{ lang.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
          <q-item clickable v-ripple to="/explorer/front">
            <q-item-section avatar>
              <q-icon name="vertical_split" />
            </q-item-section>

            <q-item-section>
              Explorer
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/settings">
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
import EventBus, { REvent } from '../client/websocket/eventBus';
import { BlockInfo } from '../client/types';

interface LangLabel {
  value: string;
  label: string;
}

export default Vue.extend({
  name: 'MainLayout',

  data() {
    return {
      drawer: false,
      miniState: true,
      lang: 'English',
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'zh', label: '中文' }
      ]
    };
  },
  methods: {
    onLangSelect(lang: LangLabel) {
      this.$i18n.locale = lang.value;
      this.lang = lang.label;
    },
    notifiedBlockAdded(event: REvent, payload: any, vue: Vue) {
      this.$store.dispatch('fetchBlock', payload['block-hash']).then(
        (block: BlockInfo) => {
          this.$store.commit('addBlockInfo', block.blockInfo);
          const blockHash = block.blockInfo.blockHash;
          const blockStr = this.$t('Block') as string;
          const addStr = this.$t('added') as string;
          this.$q.notify({
            color: 'primary',
            message: ''.concat(blockStr, ' ', blockHash, ' ', addStr),
            position: 'bottom-right',
            timeout: 10000
          });
        },
        _ => {
          const blockStr = this.$t('Block') as string;
          const errStr = this.$t('failToAdd') as string;
          this.$q.notify({
            color: 'warn',
            message: ''.concat(blockStr, ' ', payload['block-hash'], ' ', errStr),
            position: 'bottom-right',
            timeout: 10000
          });
        }
      );
    }
  },
  created() {
    EventBus.addListener(REvent.BlockAdded, this.notifiedBlockAdded, this);
  }
});
</script>
