<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class='text-h6'>{{$t('InputYourDeployId')}}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          padding
          v-model="deployId"
          :label="$t('DeployId')"
          :rules="[val => this.verifyDeployId(val) || 'Your deployId is too short']"
          lazy-rules
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          no-caps
          color="secondary"
          :label="$t('CheckTransfer')"
          @click="clickCheckTransfer(deployId)"
        />
      </q-card-section>
      <q-list
        bordered
        separator
        style="word-break: break-all;"
      >
        <q-item>
          <q-item-section>{{$t('isFinalized')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>
            <q-btn
              v-if="isFinalized"
              color="green"
              :label="$t('Finalized')"
            ></q-btn>
            <q-btn
              v-else
              color="red"
              disable
              :label="$t('NotFinalized')"
            ></q-btn>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('fromAddr')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{fromAddr}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('toAddr')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{toAddr}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('amount')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{amount}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('success')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{success}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('reason')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{reason}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('deployer')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{deployer}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('sig')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{sig}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('timestamp')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{timestamp}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('sigAlgorithm')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{sigAlgorithm}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('phloPrice')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{phloPrice}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('phloLimit')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{phloLimit}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('validAfterBlockNumber')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{validAfterBlockNumber}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('cost')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{cost}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('errored')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{errored}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('systemDeployError')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{systemDeployError}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('blockHash')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{blockHash}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('blockNumber')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{blockNumber}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('seqNum')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{seqNum}}</q-item-section>
        </q-item>

        <q-item>
          <q-item-section>{{$t('timestamp')}}</q-item-section>
          <q-separator
            vertical
            spaced
          />
          <q-item-section>{{blockTimestamp}}</q-item-section>
        </q-item>

      </q-list>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>

        <q-card-section>
          <div class="text-h6">
            {{ checkError}}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn
            flat
            label="OK"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { TransactionResponse } from '../client/types';

export default Vue.extend({
  name: 'Transfer',
  data() {
    return {
      alert: false,
      checkAlert: false,

      blockHash: '',
      blockNumber: Number(),
      seqNum: Number(),
      blockTimestamp: Number(),
      timestamp: Number(),

      deployer: '',
      sig: '',
      sigAlgorithm: '',
      phloPrice: Number(),
      phloLimit: Number(),
      validAfterBlockNumber: Number(),
      cost: Number(),
      errored: false,
      systemDeployError: '',

      fromAddr: '',
      toAddr: '',
      amount: Number(),
      success: true,
      reason: '',

      isFinalized: false,
      deployId: this.$router.currentRoute.params.deployId,

      checkError: '',
      foundTransfer: false
    };
  },
  async created() {
    if (this.$router.currentRoute.params.deployId) {
      await this.checkTransfer(this.$router.currentRoute.params.deployId);
    }
  },
  methods: {
    reset() {
      this.isFinalized = false;
      this.blockHash = '';
      this.blockNumber = 0;
      this.seqNum = 0;
      this.blockTimestamp = 0;
      this.fromAddr = '';
      this.toAddr = '';
      this.amount = 0;
      this.success = false;
      this.reason = '';

      this.deployer = '';
      this.sig = '';
      this.timestamp = 0;
      this.sigAlgorithm = '';
      this.phloPrice = 0;
      this.phloLimit = 0;
      this.validAfterBlockNumber = 0;
      this.cost = 0;
      this.errored = false;
      this.systemDeployError = '';
      this.foundTransfer = false;
    },
    async checkTransfer(deployId: string) {
      if (this.verifyDeployId(deployId)) {
        this.$q.loading.show();
        this.reset();
        try {
          const block = await this.$store.state.client.findDeploy(deployId);

          this.blockHash = block.blockHash;
          this.blockNumber = block.blockNumber;
          this.seqNum = block.seqNum;
          this.blockTimestamp = block.timestamp;

          const transactions: TransactionResponse[][] = await this.$store.state.client.getTransaction(block.blockHash);
          if (transactions.length >= 1) {
            transactions.forEach(element => {
              element.forEach(transfer => {
                if (transfer.deploy.sig == deployId) {
                  this.fromAddr = transfer.fromAddr;
                  this.toAddr = transfer.toAddr;
                  this.amount = transfer.amount;
                  this.success = transfer.success;
                  this.reason = transfer.reason;

                  this.deployer = transfer.deploy.deployer;
                  this.sig = transfer.deploy.sig;
                  this.timestamp = transfer.deploy.timestamp;
                  this.sigAlgorithm = transfer.deploy.sigAlgorithm;
                  this.phloPrice = transfer.deploy.phloPrice;
                  this.phloLimit = transfer.deploy.phloLimit;
                  this.validAfterBlockNumber = transfer.deploy.validAfterBlockNumber;
                  this.cost = transfer.deploy.cost;
                  this.errored = transfer.deploy.errored;
                  this.systemDeployError = transfer.deploy.systemDeployError;

                  this.foundTransfer = true;
                }
              });
            });
          }

          if (!this.foundTransfer) {
            throw new Error(`DeployId ${deployId} doesn't contain a transfer`);
          } else {
            const isFinalized = await this.$store.state.client.isFinalizedBlock(block.blockHash);
            this.isFinalized = isFinalized;
          }
        } catch (error) {
          if (error.request) {
            this.checkError = error.request.response;
          } else if (error.message) {
            this.checkError = error.message;
          } else {
            this.checkError = 'Unknown Error';
          }
          this.alert = true;
        } finally {
          this.$q.loading.hide();
        }
      }
    },
    async clickCheckTransfer(deployId: string) {
      this.$router.push('/explorer/transfer/' + deployId);
      this.checkTransfer(deployId);
    },
    verifyDeployId(address: string): boolean {
      // @ts-ignore
      return address.length > 100;
    }
  }
});
</script>