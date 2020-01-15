import Client from '../client/deployService';
import { BlockStore } from './blockStore';
export interface RootState {
  version: string;
  settings: Settings;
  client: Client;
  blockStore: BlockStore;
}

export interface Settings {
  HttpHost: string;
  InitBlockCount: number;
  MaxCachedBlockCount: number;
  Timeout: number;
}
