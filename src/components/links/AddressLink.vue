<template>
  <div>
    <div v-if="addr === 'validator'">
      validator
    </div>

    <div v-else-if="addr === ''">
      Genesis
    </div>

    <div v-else>
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
export default Vue.extend({
  name: 'addressLink',
  props: {
    addr: String,
    short: Boolean,
    length: Number
  }
})
</script>