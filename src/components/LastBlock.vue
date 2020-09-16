<i18n>
{
  'en-us':{
    "Latest Block Info": "Latest Block Info",
    
  },
  'zh':{
    "Latest Block Info": "最新区块信息",
  }
}
</i18n>

<template>
  <div class="full-width bg-white">
    <q-card flat>
      <div>
        <define-loading :showing="loading"></define-loading>
      </div>

      <q-card-section>
        <div class="text-h6">{{$t('Latest Block Info')}}</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-list style="word-break: break-all;">
          <q-item>
            <q-item-section
              side
              class="col-sm-3 col-xs-5 col-md-2"
            >
              <q-item-label>{{$t('blockHash')}}</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <block-link
                  :blockHash="blockHash"
                  :short="false"
                ></block-link>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section
              side
              class="col-sm-3 col-xs-5 col-md-2"
            >
              <q-item-label>{{$t('sender')}}</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{sender}}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section
              side
              class="col-sm-3 col-xs-5 col-md-2"
            >
              <q-item-label>{{$t('timestamp')}}</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <timeago
                  :datetime="timestamp"
                  :auto-update="5"
                >
                </timeago>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section
              side
              class="col-sm-3 col-xs-5 col-md-2"
            >
              <q-item-label>{{$t('deployCount')}}</q-item-label>
            </q-item-section>

            <q-item-section>
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