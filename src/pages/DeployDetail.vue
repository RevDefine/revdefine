<template>
  <q-page>
    <div class="full-width">
      <div class="q-pb-md">
        <q-card flat>
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
                <q-breadcrumbs-el :label="$t('Blocks')" />
                <q-breadcrumbs-el
                  :label="blockInfoDetail.header.blockHash.slice(0,20)+ '...'"
                  :to="{name:'block', params:{blockHash: blockInfoDetail.header.blockHash}}"
                />
                <q-breadcrumbs-el :label="$t('Deploy')" />
                <q-breadcrumbs-el :label="deployInfo.deploy.sig.slice(0,20)+ '...'" />
              </q-breadcrumbs>
            </q-toolbar>
          </div>
        </q-card>
      </div>
    </div>
    <q-card flat>
      <define-loading :showing="loading"></define-loading>
      <q-list
        separator
        style="word-break: break-all;"
      >
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('deployer')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.deployer }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('term')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.term }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('timestamp')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ new Date(deployInfo.deploy.timestamp) }} - {{ deployInfo.deploy.timestamp }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('signature')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.sig }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('sigAlgorithm')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.sigAlgorithm }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('phloPrice')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.phloPrice }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('phloLimit')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.phloLimit }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('validAfterBlockNumber')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.deploy.validAfterBlockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('cost')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.cost }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('errored')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ deployInfo.isFailed }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('systemDeployError')}}</q-item-section>
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

    <div class="q-my-md">
      <transfer-list
        :transactions="transactions"
        :loading="loading"
        :isToggle="false"
      >
      </transfer-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlockInfo, DeployInfo } from '../defineAPI/rnodeTypes';
import client from '../defineAPI';
import transferList from '../components/TransferList.vue';
import defineLoading from '../components/Loading.vue';

export default Vue.extend({
  name: 'deployDetail',
  components: {
    'transfer-list': transferList,
    'define-loading': defineLoading,
  },
  props: {
    blockInfoDetail: {
      type: Object as () => BlockInfo,
    },
    deployId: {
      type: String,
    },
  },
  data() {
    return {
      deployInfo: {
        deploy: {
          deployer: '',
          term: '',
          timestamp: 0,
          sig: '',
          sigAlgorithm: '',
          phloPrice: 1,
          phloLimit: 1,
          validAfterBlockNumber: 1,
        },
        cost: 1,
        isFailed: false,
        systemDeployError: '',
      },
      loading: false,
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
          isFinalized: true,
          isSucceeded: true,
          reason: '',
        },
      ],
    };
  },
  beforeUpdate() {
    const targetDeploy = this.blockInfoDetail.body.deploys.find((element) => element.deploy.sig == this.deployId) as DeployInfo;
    this.deployInfo = targetDeploy;
  },
  methods: {
    async getTransfer() {
      try {
        this.loading = true;
        const transactions = await client.deployTransaction(this.deployId);
        this.transactions = transactions.transactions;
        this.loading = false;
      } catch {
        this.loading = false;
        this.$router.push({ name: 'NotFound' });
      }
    },
  },
  async mounted() {
    await this.getTransfer();
  },
  watch: {
    async $route() {
      await this.getTransfer();
    },
  },
});
</script>
