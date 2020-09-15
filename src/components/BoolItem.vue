<template>
  <div class="row justify-center">
    <div v-if="yesOrNo">
      <img src="~assets/yes.png">
    </div>
    <div v-else>
      <div v-if="red">
        <img src="~assets/no_2.png">
      </div>
      <div v-else>
        <img src="~assets/no.png">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'defineBool',
  props: {
    yesOrNo: Boolean,
    red: {
      default: false,
      type: Boolean
    }
  }
})
</script>