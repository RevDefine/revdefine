import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';
import { RootState, Settings } from './types';
import Client from 'src/client/deployService';
import { LightBlockInfo } from '../client/types';
import { BlockStore } from './blockStore';

Vue.use(Vuex);

const DEFAULT_HTTPHOST = 'http://192.168.1.9:40403';
const DEFAULT_INITBLOCKCOUNT = 10;
const DEFAULT_MAXCACHEDBLOCKCOUNT = 200;
const DEFAULT_TIMEOUT = 60;

const store: StoreOptions<RootState> = {
  state: {
    version: '0.0.1',
    settings: {
      HttpHost: DEFAULT_HTTPHOST,
      InitBlockCount: DEFAULT_INITBLOCKCOUNT,
      MaxCachedBlockCount: DEFAULT_MAXCACHEDBLOCKCOUNT,
      Timeout: DEFAULT_TIMEOUT
    },
    client: new Client(DEFAULT_HTTPHOST, DEFAULT_TIMEOUT),
    blockStore: new BlockStore(DEFAULT_MAXCACHEDBLOCKCOUNT)
  },
  getters: {
    getHttpHost: (state: RootState) => {
      return state.settings.HttpHost;
    },
    getInitBlockCount: (state: RootState) => {
      return state.settings.InitBlockCount;
    },
    getMaxCachedBlockCount: (state: RootState) => {
      return state.settings.MaxCachedBlockCount;
    },
    getTimeout: (state: RootState) => {
      return state.settings.Timeout;
    }
  },
  mutations: {
    resetSettings: (state: RootState, settings: Settings) => {
      state.settings.HttpHost = settings.HttpHost;
      state.settings.InitBlockCount = settings.InitBlockCount;
      state.settings.MaxCachedBlockCount = settings.MaxCachedBlockCount;
      state.settings.Timeout = settings.Timeout;
      state.client = new Client(settings.HttpHost, settings.Timeout);
      state.blockStore = new BlockStore(settings.MaxCachedBlockCount);
    },
    addBlockInfo: (state: RootState, blockInfo: LightBlockInfo) => {
      state.blockStore.addBlock(blockInfo);
    }
  },
  actions: {
    reconfigSettings(context: ActionContext<RootState, RootState>, settings: Settings) {
      context.commit('resetSettings', settings);
    },
    async fetchBlocks(context: ActionContext<RootState, RootState>, depth: number = 10) {
      const blocks = await context.state.client.showBlocks(depth);
      blocks.forEach(lightBlock => {
        context.commit('addBlockInfo', lightBlock);
      });
    }
    // async fetchBlock(context: ActionContext<RootState, RootState>, blockHash: string) => Primise<BlockInfo> {
    // return await context.state.client.showBlock(blockHash);
    // }
  }
};

export default new Vuex.Store<RootState>(store);
