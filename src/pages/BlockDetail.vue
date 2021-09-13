<i18n>
{
  'en-us':{
    "Stake": "Stake",
    "LatestBlockHash": "LatestBlockHash",
    "ValidatorsInfo": "ValidatorsInfo"
  },
  'zh':{
    "Stake": "抵押数量",
    "LatestBlockHash": "验证区块",
    "ValidatorsInfo": "验证节点信息"
  }
}
</i18n>
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
                <q-breadcrumbs-el :label="blockInfoDetail.header.blockHash.slice(0,20)+ '...'" />
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
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('BlockHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.blockHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('sender')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.sender }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('seqNum')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.seqNum }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('signature')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.sig }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('sigAlgorithm')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.sigAlgorithm }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('shardId')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.shardId }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('extraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.extraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('version')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.version }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('timestamp')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{new Date(blockInfoDetail.header.timestamp)}} - {{ blockInfoDetail.header.timestamp }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('headerExtraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.headerExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('blockNumber')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.blockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('preStateHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.preStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('postStateHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.postStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('bodyExtraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.bodyExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('blockSize')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.header.blockSize }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('parentsHashList')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-list>
              <q-item
                v-for="parentHash in blockInfoDetail.header.parents"
                :key="parentHash"
              >
                <q-item-label>
                  <block-link
                    :blockHash="parentHash"
                    :short="false"
                    :length="10"
                  ></block-link>
                </q-item-label>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('deploys')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-list>
              <q-item
                v-for="deploy in blockInfoDetail.body.deploys"
                :key="deploy.deploy.sig"
              >
                <deploy-link
                  :blockHash="blockInfoDetail.header.blockHash"
                  :deployId="deploy.deploy.sig"
                  :short="false"
                  :length="10"
                ></deploy-link>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>

      </q-list>
    </q-card>

    <div class="q-my-md">
      <validator-table :validatorsInfo="validatorsInfo"></validator-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlockInfo } from '../defineAPI/rnodeTypes';
import blockLink from '../components/links/BlockLink.vue';
import deployLink from '../components/links/DeployLink.vue';
import defineLoading from '../components/Loading.vue';
import validatorTable from '../components/ValidatorTable.vue';
export default Vue.extend({
  name: 'blockDetail',
  components: {
    'block-link': blockLink,
    'deploy-link': deployLink,
    'define-loading': defineLoading,
    'validator-table': validatorTable,
  },
  data() {
    return {
      validatorColumn: [
        {
          name: 'validator',
          required: true,
          label: this.$t('Validator'),
          align: 'left',
          field: 'validator',
        },
        {
          name: 'stake',
          align: 'left',
          label: this.$t('Stake'),
          field: 'stake',
        },
        {
          name: 'latestBlockHash',
          align: 'left',
          label: this.$t('LatestBlockHash'),
          field: 'latestBlockHash',
        },
      ],
      pagination: {
        // sortBy: 'desc',
        // descending: false,
        page: 1,
        // this is not relying on the q-table pagination to get page
        rowsPerPage: 0,
        // rowsNumber: 10
      },
    };
  },
  props: {
    blockInfoDetail: {
      type: Object as () => BlockInfo,
    },
    validatorsInfo: {
      type: Array,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
