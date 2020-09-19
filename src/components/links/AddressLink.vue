<template>
  <div>
    <div v-if="addr === 'validator'">
      validator
    </div>

    <div v-else-if="addr === ''">
      Genesis
    </div>

    <div
      class="row"
      v-else
    >
      <copy-icon :contentS="addr"></copy-icon>
      <router-link
        :to="{name:'revaccount', params:{'addr': addr}}"
        class="clickable"
      >
        <div v-if="short">
          {{ addr.slice(0, this.length) + "..." }}
        </div>
        <div v-else>
          {{ addr }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import copyIcon from './CopyIcon.vue'

export default Vue.extend({
  name: 'addressLink',
  components: {
    'copy-icon': copyIcon
  },
  props: {
    addr: String,
    short: Boolean,
    length: Number
  }
})
</script>