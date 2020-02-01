import axios, { AxiosInstance } from 'axios';
import { GenesisVault } from './types';

interface GenesisVaultResp {
  walletData: GenesisVault[];
}

class RevClient {
  public readonly HttpHost: string;
  public TimeOut: number;
  public axiosInstance: AxiosInstance;
  public constructor(HttpHost: string, TimeOut: number) {
    this.HttpHost = HttpHost;
    this.TimeOut = TimeOut;
    console.log(process.env.NODE_ENV);
    this.axiosInstance = axios.create({
      baseURL: HttpHost,
      timeout: TimeOut * 1000
    });
  }

  public async getGenesisWallet(): Promise<GenesisVault[]> {
    const resp = await this.axiosInstance.get<GenesisVaultResp>('/api/genesisWallet');
    return resp.data.walletData;
  }
}

let DEFAULT_REVDEFINE = undefined;
if (process.env.NODE_ENV == 'production') {
  DEFAULT_REVDEFINE = 'http://revdefine.io';
} else {
  DEFAULT_REVDEFINE = 'http://127.0.0.1:8000';
}
const revClient = new RevClient(DEFAULT_REVDEFINE, 10);
export default revClient;
