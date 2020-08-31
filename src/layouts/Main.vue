<i18n>
{
  'en-us':{
    "Home": "Home",
    "Blocks": "Blocks",
    "Transfer": "Transfer",
    "Account": "Account"
  },
  'zh':{
    "Home": "首页",
    "Blocks": "区块",
    "Transfer": "转账",
    "Account": "账户"
  }
}
</i18n>
<template>
  <div>
    <q-layout
      view="lHr Lpr lFr"
      class="bg-grey-1"
    >
      <q-header
        reveal
        class="bg-white"
      >
        <div class="row justify-center">
          <q-toolbar class="col-md-10">
            <div>
              <img
                class="logo-size"
                src="../assets/revdefineLogo.png"
              >
            </div>

            <q-toolbar-title
              class="font-head"
              shrink
              v-if="$q.screen.gt.xs"
            >RevDefine
            </q-toolbar-title>

            <div class="col-md-1 col-lg-1 col-sm-1"></div>

            <q-tabs
              align="left"
              v-model="tab"
              active-color='primary'
              content-class="font-head"
            >
              <q-route-tab
                no-caps
                name="home"
                :label="$t('Home')"
                to="/home"
              />
              <q-route-tab
                no-caps
                name="blocks"
                :label="$t('Blocks')"
                to="/blocks"
              />
              <q-route-tab
                no-caps
                name="transfer"
                :label="$t('Transfer')"
                to="/transfer"
              />
              <q-route-tab
                no-caps
                name="account"
                :label="$t('Account')"
                to="/revaccounts"
              />
            </q-tabs>
            <q-space />
            <q-btn-dropdown
              no-caps
              class="font-content"
              :label="lang"
            >
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
        </div>
      </q-header>

      <!-- <q-footer
        class="bg-white"
        reveal
      >
        <div class="row justify-center">
          <q-toolbar class="col-md-10">
            <q-toolbar-title class="font-head">Footer</q-toolbar-title>
          </q-toolbar>
        </div>
      </q-footer> -->

      <q-page-container>
        <!-- This is where pages get injected -->
        <div class="row justify-center">
          <div
            class="col-md-10 col-sm-12 col-xs-12"
            style="max-width:1200px"
          >
            <router-view />
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface LangLabel {
  value: string;
  label: string;
}

export default Vue.extend({
  name: 'MainLayout',

  data() {
    return {
      lang: 'English',
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'zh', label: '中文' }
      ],
      tab: 'home'
    };
  },
  methods: {
    onLangSelect(lang: LangLabel) {
      this.$root.$i18n.locale = lang.value;
      // @ts-ignore
      this.$root.$timeago.locale = lang.value;
      this.lang = lang.label;
    }
  }
});
</script>

<style lang="sass">
.logo-font
  width: 72px
</style>