<template>
  <div>
    <router-link
      :to="{name:'deploy', params:{'blockHash': blockHash, 'deployId': deployId}}"
      class="cursor-pointer clickable"
    >
      <div v-if="short">
        {{ deployId.slice(0, this.length) + "..." }}
      </div>
      <div v-else>
        {{ deployId }}
      </div>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'deployLink',
  props: {
    blockHash: String,
    deployId: String,
    short: Boolean,
    length: Number
  }
})
</script>