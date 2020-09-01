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
        <define-loading :showing="loading"></define-loading>
        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('BlockHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.blockHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('sender')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.sender }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('seqNum')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.seqNum }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('signature')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.sig }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('sigAlgorithm')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.sigAlgorithm }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('shardId')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.shardId }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('extraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.extraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('version')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.version }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('timestamp')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.timestamp }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('headerExtraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.headerExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('blockNumber')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.blockNumber }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('preStateHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.preStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('postStateHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.postStateHash }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('bodyExtraBytes')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.bodyExtraBytes }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('blockSize')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-item-label>{{ blockInfoDetail.blockInfo.blockSize }}</q-item-label>
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
                v-for="parentHash in blockInfoDetail.blockInfo.parentsHashList"
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
                v-for="deploy in blockInfoDetail.deploys"
                :key="deploy.sig"
              >
                <deploy-link
                  :blockHash="blockInfoDetail.blockInfo.blockHash"
                  :deployId="deploy.sig"
                  :short="false"
                  :length="10"
                ></deploy-link>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section class="col-sm-3 col-xs-5 col-md-2">{{$t('bondsValidatorList')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section padding>
            <q-list>
              <q-item
                v-for="bond in blockInfoDetail.blockInfo.bonds"
                :key="bond.validator"
              >
                <q-item-label>{{ bond }}</q-item-label>
              </q-item>
            </q-list>
          </q-item-section>
        </q-item>

      </q-list>

    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { BlockInfo } from '../defineAPI/rnodeTypes';
import blockLink from './links/BlockLink.vue';
import deployLink from './links/DeployLink.vue';
import defineLoading from './Loading.vue';
export default Vue.extend({
  name: 'blockDetail',
  components: {
    'block-link': blockLink,
    'deploy-link': deployLink,
    'define-loading': defineLoading
  },
  props: {
    blockInfoDetail: {
      type: Object as () => BlockInfo
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
});
</script>
