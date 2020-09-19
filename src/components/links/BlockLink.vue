<template>
  <div v-if="blockHash.length == 0">
    None
  </div>
  <div
    class="row"
    v-else
  >
    <template v-if="short">
      <copy-icon :contentS="blockHash"></copy-icon>
    </template>
    <router-link
      :to="{name:'block', params:{'blockHash': blockHash}}"
      class="clickable"
    >
      <div v-if="short">
        {{ blockHash.slice(0, this.length) + "..." }}
      </div>
      <div v-else>
        {{ blockHash }}
      </div>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import copyIcon from './CopyIcon.vue'
export default Vue.extend({
  name: 'blockLink',
  components: {
    'copy-icon': copyIcon
  },
  props: {
    blockHash: String,
    short: Boolean,
    length: {
      type: Number,
      default: 20
    }
  }
})
</script>