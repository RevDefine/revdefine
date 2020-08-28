<template>
  <div class="q-py-md q-px-md">
    <div class="full-width">
      <div class="q-py-md">
        <q-card>
          <div>
            <q-toolbar>
              <q-breadcrumbs>
                <template v-slot:separator>
                  <q-icon
                    size="1.5em"
                    name="chevron_right"
                    color="black"
                  />
                </template>
                <q-breadcrumbs-el label="Blocks" />
                <q-breadcrumbs-el :label="blockInfoDetail.blockInfo.blockHash.slice(0,20)+ '...'" />
                <q-breadcrumbs-el label="Deploy" />
                <q-breadcrumbs-el :label="deployInfo.sig.slice(0,20)+ '...'" />
              </q-breadcrumbs>
            </q-toolbar>
          </div>
        </q-card>
      </div>
    </div>
    <q-card>
      <q-list
        bordered
        separator
        style="word-break: break-all;"
      >
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">deployer</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deployer }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">term</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.term }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">timestamp</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.timestamp }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">signature</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.sig }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">sigAlgorithm</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.sigAlgorithm }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">phloPrice</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.phloPrice }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">phloLimit</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.phloLimit }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">validAfterBlockNumber</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.validAfterBlockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">cost</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.cost }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">errored</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.errored }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">systemDeployError</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.systemDeployError }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-card>

    <div>
      <transfer-list
        :transactions="transactions"
        :loading="transactionsLoading"
      >
      </transfer-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlockInfo, DeployInfo } from '../defineAPI/rnodeTypes';
import client from '../defineAPI';
import transferList from './TransferList.vue';

export default Vue.extend({
  name: 'deployDetail',
  components: {
    'transfer-list': transferList
  },
  props: {
    blockInfoDetail: {
      type: Object as () => BlockInfo
    },
    loading: {
      type: Boolean,
      default: false
    },
    deployId: {
      type: String
    }
  },
  data() {
    return {
      deployInfo: {
        deployer: '',
        term: '',
        timestamp: 0,
        sig: '',
        sigAlgorithm: '',
        phloPrice: 1,
        phloLimit: 1,
        validAfterBlockNumber: 1,
        cost: 1,
        errored: false,
        systemDeployError: ''
      },
      transactionsLoading: false,
      transactions: [
        {
          fromAddr: '',
          toAddr: '',
          amount: 0,
          transactionType: '',
          blockHash: '',
          blockNumber: 0,
          deployId: '',
          timestamp: 0,
          isFinalized: false,
          isSucceeded: false,
          reason: ''
        }
      ]
    };
  },
  beforeUpdate() {
    const targetDeploy = this.blockInfoDetail.deploys.find(element => element.sig == this.deployId) as DeployInfo;
    this.deployInfo = targetDeploy;
  },
  methods: {
    async getTransfer() {
      this.transactionsLoading = true;
      const transactions = await client.deployTransaction(this.deployId);
      this.transactions = transactions.transactions;
      this.transactionsLoading = false;
    }
  },
  async mounted() {
    await this.getTransfer();
  },
  watch: {
    async $route() {
      await this.getTransfer();
    }
  }
});
</script>
