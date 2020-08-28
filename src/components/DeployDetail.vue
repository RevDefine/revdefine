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
                <q-breadcrumbs-el :label="blockInfo.blockHash.slice(0,20)+ '...'" />
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
            <q-item-label>{{ blockInfo.deployer }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">term</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.term }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">timestamp</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.timestamp }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">signature</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.sig }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">sigAlgorithm</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.sigAlgorithm }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">phloPrice</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.phloPrice }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">phloLimit</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.phloLimit }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">validAfterBlockNumber</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.validAfterBlockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">cost</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.cost }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">errored</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.errored }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">systemDeployError</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.systemDeployError }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';

export default Vue.extend({
  name: 'deployDetail',
  data() {
    return {
      blockInfo: {
        blockHash: '',
        sender: '',
        seqNum: 0,
        sig: '',
        sigAlgorithm: '',
        shardId: '',
        extraBytes: '',

        // HeaderProto message
        version: 0,
        timestamp: 0,
        headerExtraBytes: '',
        parentsHashList: [''],

        // BodyProto message
        blockNumber: 0,
        preStateHash: '',
        postStateHash: '',
        bodyExtraBytes: '',
        bonds: [{ validator: '', stake: 0 }],

        // extra
        blockSize: '',
        deployCount: 0,
        faultTolerance: 0
      },
      deploys: [
        {
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
        }
      ],
      loading: false,
      blockHash: ''
    };
  },
  methods: {},
  async mounted() {
    this.loading = true;
    const block = await client.showBlock(this.$route.params.blockHash);
    this.deploys = block.deploys;
    this.blockInfo = block.blockInfo;
    this.loading = false;
  }
});
</script>
