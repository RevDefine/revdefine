<template>
  <q-page padding>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Not found BlockHash {{ $router.currentRoute.params.blockHash }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-body2">
            The blockHash you provided can not be found. Please make sure your
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

    <div class="row">
      <div class="col-sm-9 col-xs-12">
        <span class="text-h5"># Block : </span><span
          class="text-body2"
          style="word-break: break-all;"
        >{{ blockInfo.blockHash }}</span>
      </div>
      <div class="col-sm-3 col-xs-12">
        <search-block-bar @search="getBlockInfo"></search-block-bar>
      </div>
    </div>
    <div>
      <q-list
        bordered
        separator
        style="word-break: break-all;"
      >
        <q-item
          v-for="item in blockInfoList"
          v-bind:key="item.key"
        >
          <template v-if="item.key === 'parentsHashList'">
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{ $t('parentsHashList') }}</q-item-section>
            <q-separator
              vertical
              spaced
            />
            <q-item-section>
              <q-list>
                <q-item
                  v-for="parentHash in item.value"
                  :key="parentHash"
                >
                  <q-item-label>
                    <router-link :to="{ name: 'blockInfo', params: { blockHash: parentHash } }">{{
                      parentHash
                    }}</router-link>
                  </q-item-label>
                </q-item>
              </q-list>
            </q-item-section>
          </template>

          <template v-else-if="item.key === 'bonds'">
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{ $t('bondsValidatorList') }}</q-item-section>
            <q-separator
              vertical
              spaced
            />
            <q-item-section>
              <q-list>
                <q-item
                  v-for="bond in item.value"
                  :key="bond.validator"
                >
                  <q-item-label>{{ bond }}</q-item-label>
                </q-item>
              </q-list>
            </q-item-section>
          </template>

          <template v-else-if="item.key === 'timestamp'">
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{ $t(item.key) }}</q-item-section>
            <q-separator
              vertical
              spaced
            />
            <q-item-section>
              <q-item-label>{{ item.value + ' -- ' + convertTimeStamp(item.value) }}</q-item-label>
            </q-item-section>
          </template>

          <template v-else>
            <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{ $t(item.key) }}</q-item-section>
            <q-separator
              vertical
              spaced
            />
            <q-item-section padding>
              <q-item-label>{{ item.value }}</q-item-label>
            </q-item-section>
          </template>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{ $t('deploys') }}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-list>
              <q-item
                v-for="deploy in deploys"
                :key="deploy.sig"
              >
                <q-item-label>{{ deploy }}</q-item-label>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBlockBar from '../components/SearchBlockBar.vue';
import { DeployInfo } from '../client/types';
import { timeStampToDateTime } from '../lib/datetime';

interface Item {
  key: string;
  value: undefined;
}
export default Vue.extend({
  name: 'BlockInfo',
  components: {
    'search-block-bar': SearchBlockBar
  },
  data() {
    return {
      blockInfo: {},
      deploys: new Array<DeployInfo>(),
      blockInfoList: new Array<Item>(),

      listView: [
        'blockHash',
        'sender',
        'seqNum',
        'sig',
        'sigAlgorithm',
        'shardId',
        'extraBytes',
        'version',
        'timestamp',
        'headerExtraBytes',
        'parentsHashList',
        'blockNumber',
        'preStateHash',
        'postStateHash',
        'bodyExtraBytes',
        'blockSize',
        'deployCount',
        'faultTolerance',
        'bonds'
      ],

      isFinalized: 'unknown',

      alert: false
    };
  },
  methods: {
    async getBlockInfo(blockHash: string) {
      this.$q.loading.show();
      try {
        const fullblockInfo = await this.$store.state.client.showBlock(blockHash);
        this.blockInfo = fullblockInfo.blockInfo;
        this.deploys = fullblockInfo.deploys;

        this.blockInfoList = [];
        this.listView.forEach(key => {
          const item: Item = { value: fullblockInfo.blockInfo[key], key: key };
          this.blockInfoList.push(item);
        });
      } catch (e) {
        this.alert = true;
      } finally {
        this.$q.loading.hide();
      }
    },
    convertTimeStamp(time: string) {
      return timeStampToDateTime(time);
    }
  },

  async mounted() {
    await this.getBlockInfo(this.$router.currentRoute.params.blockHash);
  },

  async beforeRouteUpdate(to, from, next) {
    await this.getBlockInfo(to.params.blockHash);
    next();
  }
});
</script>
