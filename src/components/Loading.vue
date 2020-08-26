<template>
  <q-inner-loading :showing="showing">
    <q-spinner-pie
      color="primary"
      size="4em"
    />
  </q-inner-loading>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'defineLoading',
  props: {
    showing: Boolean
  }
})
</script>