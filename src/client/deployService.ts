// Reference to TypeScript definitions for IntelliSense in VSCode
// import DeployServiceClient from '@tgrospic/rnode-grpc-js';
import { IWhenable } from 'q';
import { BlockInfo, LightBlockInfo } from './types';
import axios, { AxiosInstance } from 'axios';
import { ServerResponse } from 'http';

const TIMEOUT = 30;

function transformBlockInfo() {}

function transformLightBlockInfo(r: ServerResponse) {}

export default class Client {
  public readonly HttpHost: string;
  public TimeOut: number;
  public axiosInstance: AxiosInstance;
  public constructor(HttpHost: string, TimeOut: number) {
    this.HttpHost = HttpHost;
    this.TimeOut = TimeOut;
    this.axiosInstance = axios.create({
      baseURL: HttpHost,
      timeout: TimeOut * 1000
    });
  }

  public async showBlock(blockHash: string): Promise<BlockInfo> {
    const resp = await this.axiosInstance.get<BlockInfo>('/api/block/' + blockHash);
    return resp.data;
  }

  public async showBlocks(depth: number): Promise<LightBlockInfo[]> {
    const resp = await this.axiosInstance.get<LightBlockInfo[]>('/api/blocks/' + depth);
    return resp.data;
  }

  // public findDeploy(deployId: string): LightBlockInfo {}

  // public isFinalized(hash: string): boolean {}

  // public lastFinalizedBlock(): BlockInfo {}

  // public visualizeDag(depth: number, showJustificationLines: boolean) {}
}
