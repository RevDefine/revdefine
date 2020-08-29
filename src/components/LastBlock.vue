<template>
  <div class="full-width bg-white">
    <q-card
      bordered
      class="q-mx-md q-my-md"
    >
      <div>
        <define-loading :showing="loading"></define-loading>
      </div>
      <q-card-section>
        <div class="text-h6">Latest Block Info</div>
      </q-card-section>
      <q-separator
        dark
        inset
      />
      <q-card-section>
        <q-list
          bordered
          style="word-break: break-all;"
        >
          <q-item>
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">
              <q-item-label>blockHash</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label>
                <block-link
                  :blockHash="blockHash"
                  :short="false"
                ></block-link>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">
              <q-item-label>sender</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label>
                {{sender}}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">
              <q-item-label>timestamp</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label>
                <timeago
                  :datetime="timestamp"
                  :auto-update="5"
                >
                </timeago>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">
              <q-item-label>deployCount</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-item-label>
                {{ deployCount}}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';
import defineLoading from './Loading.vue';
import blockLink from './links/BlockLink.vue';

export default Vue.extend({
  name: 'lastBlockInfo',
  components: {
    'define-loading': defineLoading,
    'block-link': blockLink
  },
  data() {
    return {
      deployCount: 0,
      timestamp: 1,
      sender: '',
      blockHash: '',
      loading: false
    };
  },
  async beforeMount() {
    this.loading = true;
    const blocks = await client.showBlocks(1);
    this.deployCount = blocks[0].deployCount;
    this.timestamp = blocks[0].timestamp;
    this.sender = blocks[0].sender;
    this.blockHash = blocks[0].blockHash;
    this.loading = false;
  }
});
</script>

<style lang="sass" scoped>
</style>