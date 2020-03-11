import { BlockInfo, LightBlockInfo, ExploratoryDeployResponse } from './types';
import axios, { AxiosInstance } from 'axios';



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

  public async showBlock (blockHash: string): Promise<BlockInfo> {
    const resp = await this.axiosInstance.get<BlockInfo>('/api/block/' + blockHash);
    return resp.data;
  }

  public async showBlocks (depth: number): Promise<LightBlockInfo[]> {
    const resp = await this.axiosInstance.get<LightBlockInfo[]>('/api/blocks/' + depth);
    return resp.data;
  }

  public async findDeploy (deployId: string): Promise<LightBlockInfo> {
    const resp = await this.axiosInstance.get<LightBlockInfo>('/api/deploy/' + deployId)
    return resp.data
  }

  public async exploratoryDeploy (term: string): Promise<ExploratoryDeployResponse> {
    const resp = await this.axiosInstance.post<ExploratoryDeployResponse>('/api/explore-deploy', term)
    return resp.data
  }

  // public isFinalized(hash: string): boolean {}

  // public lastFinalizedBlock(): BlockInfo {}

  // public visualizeDag(depth: number, showJustificationLines: boolean) {}

  //////////////////////////////////////////////////////////////////

}
