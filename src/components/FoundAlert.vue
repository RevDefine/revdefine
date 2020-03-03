<template>
  <q-dialog v-model="alert">
    <q-card>
      <q-card-section>
        <div class="text-h6">Not found </div>
      </q-card-section>

      <q-card-section>
        <div class="text-body2">
          The searchHash you provided can not be found. Please make sure your
          <router-link to="/settings">setting</router-link> is right and config an enbled server.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          flat
          label="OK"
          color="primary"
          v-close-popup
          to="/explorer/front"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'found-alert-dialog',
  props: {
    alert: Boolean
  }
});
</script>