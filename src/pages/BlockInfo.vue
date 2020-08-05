<template>
  <q-page padding>

    <q-toolbar>
      <span class="text-h5"># Block </span>
      <q-space />
      <search-alert
        :alert='alert'
        @search-alert="searchHash"
      ></search-alert>
    </q-toolbar>
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
            <q-item-section padding>
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
            <q-item-section padding>
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
                <q-btn
                  :label="deploy.sig"
                  @click='showDeployInfo(deploy.sig)'
                />
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
      </q-list>

      <q-dialog
        v-model="deployInfoDialog"
        full-width
        full-height
      >
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <q-space />
            <q-btn
              icon="close"
              flat
              round
              dense
              v-close-popup
            />
          </q-card-section>
          <q-card-section>
            <q-list
              bordered
              separator
              style="word-break: break-all;"
            >
              <q-item
                v-for="info in deployInfoListView"
                v-bind:key="info"
              >
                <q-item-section class="col-sm-3 col-xs-5 col-md-2"> {{$t(info)}} </q-item-section>
                <q-separator
                  vertical
                  spaced
                ></q-separator>
                <q-item-section padding>
                  <q-item-label>{{ deployInfoView[info] }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchAlert from '../components/SearchAlert.vue';
import { SearchType } from '../components/SearchBar.vue';
import { DeployInfo } from '../client/types';
import { timeStampToDateTime } from '../lib/datetime';

interface Item {
  key: string;
  value: undefined;
}

export default Vue.extend({
  name: 'BlockInfo',
  components: {
    'search-alert': SearchAlert
  },
  data() {
    return {
      blockInfo: {},
      deploys: new Array<DeployInfo>(),
      blockInfoList: new Array<Item>(),

      deployInfoView: {},
      deployInfoDialog: false,
      deployInfoListView: [
        'deployer',
        'term',
        'timestamp',
        'sig',
        'sigAlgorithm',
        'phloPrice',
        'phloLimit',
        'validAfterBlockNumber',
        'cost',
        'errored',
        'systemDeployError'
      ],

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
    async searchHash(searchHash: string, searchType: SearchType) {
      if (searchType == SearchType.BlockHash) {
        let blockHash = searchHash;
        this.getBlockInfo(blockHash);
      } else if (searchType == SearchType.DeployId) {
        try {
          this.$q.loading.show();
          const block = await this.$store.state.client.findDeploy(searchHash);
          let blockHash = block.blockHash;
          this.getBlockInfo(blockHash);
        } catch (e) {
          this.alert = true;
        }finally{
          this.$q.loading.hide()
        }
      }
    },
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
    },
    showDeployInfo(deployId: string) {
      const result = this.deploys.find(d => d.sig === deployId);
      if (result != undefined) {
        this.deployInfoView = result;
        this.deployInfoDialog = true;
      }
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
