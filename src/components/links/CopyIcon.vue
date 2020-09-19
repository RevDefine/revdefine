<i18n>
{
  'en-us':{
    "Copied": "Copied",
  },
  'zh':{
    "Copied": "已复制",
  }
}
</i18n>
<template>
  <div
    v-on:click="copyClipboard"
    class="copy"
  >
    <q-icon name="content_copy"></q-icon>
    <q-tooltip
      no-parent-event
      v-model="showTip"
    >{{$t('Copied')}}!</q-tooltip>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { copyToClipboard } from 'quasar';
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default Vue.extend({
  name: 'copyIcon',
  data() {
    return {
      showTip: false,
    };
  },
  props: {
    contentS: {
      default: '',
      type: String,
    },
  },
  methods: {
    async copyClipboard() {
      await copyToClipboard(this.contentS);
      this.showTip = true;
      await delay(1000);
      this.showTip = false;
    },
  },
});
</script>


<style lang="sass" scoped>
.copy
  &:hover
    color: #347AFF
</style>