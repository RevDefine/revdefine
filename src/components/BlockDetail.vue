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
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">BlockHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.blockHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">sender</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.sender }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">seqNum</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.seqNum }}</q-item-label>
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
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">shardId</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.shardId }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">extraBytes</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.extraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">version</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.version }}</q-item-label>
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
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">headerExtraBytes</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.headerExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">blockNumber</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.blockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">preStateHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.preStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">postStateHash</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.postStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">bodyExtraBytes</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.bodyExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">blockSize</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfo.blockSize }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-expansion-item
            expand-separator
            label="ParentsHash"
            class="full-width"
          >
            <q-card>
              <q-card-section>
                Parent
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item>

        <q-item>
          <q-expansion-item
            expand-separator
            label="Bonds"
          >
            <q-card>
              <q-card-section>
                Bond
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item>

        <q-item>
          <q-expansion-item
            expand-separator
            label="Justifications"
          >
            <q-card>
              <q-card-section>
                Justifications
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item>

        <q-item>
          <q-expansion-item
            expand-separator
            label="Deploys"
          >
            <q-card>
              <q-card-section>
                Deploys
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-item>

      </q-list>

    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import client from '../defineAPI';

export default Vue.extend({
  name: 'BlockInfo',
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
