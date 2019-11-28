<template>
  <q-page padding>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Not found BlockHash {{ $router.currentRoute.params.blockHash }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-body2">
            The blockHash you provided can not be found. Please make sure your <router-link to="/settings">setting</router-link> is
            right and config an enbled server.
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
        >{{blockHash}}</span>
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
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">blockHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{blockHash}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">blockSize</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{blockHash}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">blockNumber</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{blockNumber}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">version</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{version}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">deployCount</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{deployCount}}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">tupleSpaceHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{tupleSpaceHash}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">timestamp</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{timestamp}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">faultTolerance</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{faultTolerance}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">mainParentHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <router-link :to="{ name: 'blockInfo', params: { blockHash: mainParentHash }}">{{mainParentHash}}</router-link>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">sender</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{sender}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">shardId</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{shardId}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">parentsHashList</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-list>
              <q-item
                v-for="parentHash in parentsHashList"
                :key="parentHash"
              >
                <q-item-label>
                  <router-link :to="{ name: 'blockInfo', params: { blockHash: parentHash }}">{{parentHash}}</router-link>
                </q-item-label>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">bondsValidatorList</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-list>
              <q-item
                v-for="bond in bondsValidatorList"
                :key="bond"
              >
                <q-item-label>{{bond}}</q-item-label>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">deployCost</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-item-label>{{deployCost}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>


<script lang="ts">
import Vue from 'vue';
import SearchBlockBar from '../components/SearchBlockBar.vue';
export default Vue.extend({
  name: 'BlockInfo',
  components: {
    'search-block-bar': SearchBlockBar
  },
  data() {
    return {
      blockHash: '',
      blockSize: '',
      blockNumber: '',
      version: '',
      deployCount: '',
      tupleSpaceHash: '',
      timestamp: '',
      faultTolerance: '',
      mainParentHash: '',
      sender: '',
      shardId: '',
      parentsHashList: [''],
      bondsValidatorList: [''],
      deployCost: [''],
      isFinalized: 'unknown',

      alert: false
    };
  },
  methods: {
    async getBlockInfo(blockHash: string) {
      this.$q.loading.show();
      try {
        const blockInfo = await this.$store.state.client.showBlock(blockHash);
        this.blockHash = blockInfo.blockHash;
        this.blockSize = blockInfo.blockSize;
        this.blockNumber = blockInfo.blockNumber;
        this.version = blockInfo.version;
        this.deployCount = blockInfo.deployCount;
        this.tupleSpaceHash = blockInfo.tupleSpaceHash;
        this.timestamp = blockInfo.timestamp;
        this.faultTolerance = blockInfo.faultTolerance;
        this.mainParentHash = blockInfo.mainParentHash;
        this.sender = blockInfo.sender;
        this.shardId = blockInfo.shardId;
        this.parentsHashList = blockInfo.parentsHashList;
        this.bondsValidatorList = blockInfo.bondsValidatorList;
        this.deployCost = blockInfo.deployCount;
      } catch (e) {
        this.alert = true;
      } finally {
        this.$q.loading.hide();
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
