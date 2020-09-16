<template>
  <div v-if="blockHash.length == 0">
    None
  </div>
  <div v-else>
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
export default Vue.extend({
  name: 'blockLink',
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