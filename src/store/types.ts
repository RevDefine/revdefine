import Client from '../client/deployService';
import { BlockStore } from './blockStore';
export interface RootState {
  version: string;
  settings: Settings;
  client: Client;
  blockStore: BlockStore;
}

export interface Settings {
  GRPCProxyHost: string;
  WebsocketHost: string;
}
