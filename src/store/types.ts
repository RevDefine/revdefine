import Client from '../client/deployService';
import RnodeWebsocket from '../client/websocket/ws';
import { BlockStore } from './blockStore';
export interface RootState {
  version: string;
  settings: Settings;
  client: Client;
  blockStore: BlockStore;
  wsClient: RnodeWebsocket;
}

export interface Settings {
  HttpHost: string;
  InitBlockCount: number;
  MaxCachedBlockCount: number;
  Timeout: number;
  EnableWebsocket: 'YES' | 'NO';
}
