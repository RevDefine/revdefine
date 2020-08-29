import { BlockInfo, LightBlockInfo, ExploratoryDeployResponse, IsFinalizedResponse } from './rnodeTypes';
import { OldTransactionResponse, TransactionsResponse, RevAccountResponse, RevAccountListResponse, RangeDataResponse } from './defineTypes'
import axios, { AxiosInstance } from 'axios';
import domainHost from './host'


export const defaultRowsPerPage = 20
export const defaultPage = 1
const definePrefix = '/define/api'
class DefineClient {
  public readonly HTTPHost: string;
  public readonly HTTPPort: number;
  public readonly RnodeHost: string;
  public readonly RnodePort: number;
  public TimeOut: number;
  public defineAxiosInstance: AxiosInstance;
  public rnodeAxiosInstance: AxiosInstance;
  public constructor(HTTPHost: string, HTTPPort: number, RnodeHost: string, RnodePort: number, TimeOut: number) {
    this.HTTPHost = HTTPHost;
    this.HTTPPort = HTTPPort
    this.RnodeHost = RnodeHost
    this.RnodePort = RnodePort
    this.TimeOut = TimeOut;
    this.defineAxiosInstance = axios.create({
      baseURL: HTTPHost + ':' + HTTPPort + definePrefix,
      timeout: TimeOut * 1000
    });

    this.rnodeAxiosInstance = axios.create({
      baseURL: RnodeHost + ':' + RnodePort,
      timeout: TimeOut * 1000
    });
  }
  //// ****************************************** rnode API******************************************
  public async showBlock (blockHash: string): Promise<BlockInfo> {
    const resp = await this.rnodeAxiosInstance.get<BlockInfo>('/api/block/' + blockHash);
    return resp.data;
  }

  public async showBlocks (depth: number): Promise<LightBlockInfo[]> {
    const resp = await this.rnodeAxiosInstance.get<LightBlockInfo[]>('/api/blocks/' + depth);
    return resp.data;
  }

  public async getBlocksByHeight (start: number, end: number): Promise<LightBlockInfo[]> {
    const resp = await this.rnodeAxiosInstance.get<LightBlockInfo[]>('/api/blocks/' + start + '/' + end);
    return resp.data;
  }

  public async findDeploy (deployId: string): Promise<LightBlockInfo> {
    const resp = await this.rnodeAxiosInstance.get<LightBlockInfo>('/api/deploy/' + deployId)
    return resp.data
  }

  public async exploratoryDeploy (term: string): Promise<ExploratoryDeployResponse> {
    const resp = await this.rnodeAxiosInstance.post<ExploratoryDeployResponse>('/api/explore-deploy', term)
    return resp.data
  }

  public async isFinalizedBlock (blockHash: string): Promise<IsFinalizedResponse> {
    const resp = await this.rnodeAxiosInstance.get<IsFinalizedResponse>('/api/is-finalized/' + blockHash)
    return resp.data
  }
  //// ****************************************** rnode API******************************************


  //// ========================================== define API==========================================
  public async getLatestTransactions (page: number = defaultPage, rowsPerPage: number = defaultRowsPerPage): Promise<TransactionsResponse> {
    const resp = await this.defineAxiosInstance.get<TransactionsResponse>('/transactions', { params: { rowsPerPage: rowsPerPage, page: page } })
    return resp.data
  }


  public async trasactions (address: string, page: number = defaultPage, rowsPerPage: number = defaultRowsPerPage): Promise<TransactionsResponse> {
    const resp = await this.defineAxiosInstance.get<TransactionsResponse>('/transactions/' + address, { params: { rowsPerPage: rowsPerPage, page: page } })
    return resp.data
  }

  public async deployTransaction (deployId: string, page: number = defaultPage, rowsPerPage: number = defaultRowsPerPage): Promise<TransactionsResponse> {
    const resp = await this.defineAxiosInstance.get<TransactionsResponse>('/deploy/' + deployId + '/transfer', { params: { rowsPerPage: rowsPerPage, page: page } })
    return resp.data
  }

  public async revAccount (address: string): Promise<RevAccountResponse> {
    const resp = await this.defineAxiosInstance.get<RevAccountResponse>('/revaccount/' + address)
    return resp.data
  }

  public async revAccounts (page: number = defaultPage, rowsPerPage: number = defaultRowsPerPage): Promise<RevAccountListResponse> {
    const resp = await this.defineAxiosInstance.get<RevAccountListResponse>('/revaccounts', { params: { rowsPerPage: rowsPerPage, page: page } })
    return resp.data
  }

  public async blockTransactions (blockHash: string): Promise<TransactionsResponse> {
    const resp = await this.defineAxiosInstance.get<TransactionsResponse>('/block/' + blockHash + '/transactions')
    return resp.data
  }
  public async statDeploy (): Promise<RangeDataResponse> {
    const resp = await this.defineAxiosInstance.get<RangeDataResponse>('/stat/deploy')
    return resp.data
  }
  public async statTransfer (): Promise<RangeDataResponse> {
    const resp = await this.defineAxiosInstance.get<RangeDataResponse>('/stat/transfer')
    return resp.data
  }

  public async getTransactionOld (blockHash: string): Promise<OldTransactionResponse[][]> {
    const resp = await this.defineAxiosInstance.get<OldTransactionResponse[][]>('/getTransaction/' + blockHash)
    return resp.data
  }
  //// ========================================== define API==========================================
}

const client = new DefineClient(domainHost.host, domainHost.port, domainHost.rnodeHost, domainHost.rnodePort, domainHost.timeout)

export default client