<template>
  <div class="row">
    <template v-if="short">
      <copy-icon :contentS="deployId"></copy-icon>
    </template>
    <router-link
      :to="{name:'deploy', params:{'blockHash': blockHash, 'deployId': deployId}}"
      class="clickable"
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
import copyIcon from './CopyIcon.vue'
export default Vue.extend({
  name: 'deployLink',
  components: {
    'copy-icon': copyIcon
  },
  props: {
    blockHash: String,
    deployId: String,
    short: Boolean,
    length: Number
  }
})
</script>

<style lang="sass" scoped>
.copy
  &:hover
    color: #347AFF
</style>