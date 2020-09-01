<template>
  <div class="row justify-center">
    <div v-if="yesOrNo">
      <img src="~assets/yes.png">
    </div>
    <div v-else>
      <img src="~assets/no.png">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'defineBool',
  props: {
    yesOrNo: Boolean
  }
})
</script>