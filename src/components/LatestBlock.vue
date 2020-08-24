<template>
  <q-card
    bordered
    class="full-width"
  >
    <q-card-section>
      <div class="text-h6">Latest Block Info</div>
    </q-card-section>
    <q-separator
      dark
      inset
    />
    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>blockHash</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              488baf3f2e7be35c427285eecd7a730d1a840ac74fab614fc63eb578977477a6
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>sender</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              040fead40b06b322711e64c34f4da2cca21d96346055de5781f10a30180b0fdc1d17dd299ecd7ddf79fe35b488126dd678401c114f77bab25de8a8bd2a0245919d
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>timestamp</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              1598269136481 -- Mon Aug 24 2020 19:38:56 GMT+0800 (China Standard Time)
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label>deployCount</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label>
              1
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'latestBlockInfo',
  data() {
    return {};
  }
});
</script>

<style lang="sass" scoped>
</style>