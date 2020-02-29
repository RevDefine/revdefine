import Vue from 'vue';
import Vuex, { StoreOptions, ActionContext } from 'vuex';
import { RootState, Settings } from './types';
import Client from 'src/client/deployService';
import RnodeWebsocket from '../client/websocket/ws';
import { LightBlockInfo, BlockInfo } from '../client/types';
import { BlockStore } from './blockStore';

Vue.use(Vuex);

const DEFAULT_HTTPHOST = 'http://127.0.0.1:40403';
const WEBSOCKET_PATH = '/ws/events';
const DEFAULT_WEBSOCKET_HOST = DEFAULT_HTTPHOST.replace('http', 'ws') + WEBSOCKET_PATH;
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
    blockStore: new BlockStore(DEFAULT_MAXCACHEDBLOCKCOUNT),
    wsClient: new RnodeWebsocket(DEFAULT_WEBSOCKET_HOST)
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
      const websocketHost = settings.HttpHost.startsWith('http://') ? settings.HttpHost.replace('http', 'ws') : settings.HttpHost.startsWith('https://') ? settings.HttpHost.replace('https', 'wss') : settings.HttpHost;
      state.wsClient = new RnodeWebsocket(websocketHost + WEBSOCKET_PATH);
    },
    addBlockInfo: (state: RootState, blockInfo: LightBlockInfo) => {
      state.blockStore.addBlock(blockInfo);
    },
    sortStoreBlocks: (state: RootState) => {
      state.blockStore.sortBlocks();
    },
    connectWs: (state: RootState) => {
      state.wsClient.connect();
    }
  },
  actions: {
    reconfigSettings (context: ActionContext<RootState, RootState>, settings: Settings) {
      context.commit('resetSettings', settings);
    },
    connectWs (context: ActionContext<RootState, RootState>) {
      context.commit('connectWs');
    },
    async fetchBlocks (context: ActionContext<RootState, RootState>, depth: number = 10) {
      const blocks = await context.state.client.showBlocks(depth);
      blocks.forEach(lightBlock => {
        context.commit('addBlockInfo', lightBlock);
        context.commit('sortStoreBlocks');
      });
    },
    async fetchBlock (context: ActionContext<RootState, RootState>, blockHash: string): Promise<BlockInfo> {
      return await context.state.client.showBlock(blockHash);
    }
  }
};

export default new Vuex.Store<RootState>(store);
