<template>
  <div>
    <router-link
      :to="{name:'block', params:{'blockHash': blockHash}}"
      class="cursor-pointer clickable"
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
    length: Number
  }
})
</script>