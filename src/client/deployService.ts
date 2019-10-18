// Reference to TypeScript definitions for IntelliSense in VSCode
// import DeployServiceClient from '@tgrospic/rnode-grpc-js';
import * as grpcWeb from 'grpc-web';
import { DeployServiceClient } from '../../grpc/DeployServiceV1_grpc_web_pb';
import {
  BlockResponse,
  BlockInfoResponse,
  FindDeployResponse,
  IsFinalizedResponse,
  LastFinalizedBlockResponse
} from '../../grpc/DeployServiceV1_pb';
import {
  BlockQuery,
  BlocksQuery,
  FindDeployQuery,
  IsFinalizedQuery,
  LastFinalizedBlockQuery
} from '../../grpc/DeployServiceCommon_pb';
import { IWhenable } from 'q';
import { BlockInfo, LightBlockInfo } from './types';
import { GRPCError } from './error';
import { Message } from 'google-protobuf';

const TIMEOUT = 30;

function statusHandle(reject: (reason?: GRPCError) => void) {
  return (status: grpcWeb.Status) => {
    switch (status.code) {
      case grpcWeb.StatusCode.OK: {
        break;
      }
      default: {
        reject(new GRPCError(status.code, status.details));
        break;
      }
    }
  };
}

function statusHandleResolve<T>(
  arg: T,
  resolve: (object?: IWhenable<T>) => void,
  reject: (reason?: GRPCError) => void
): (status: grpcWeb.Status) => void {
  return (status: grpcWeb.Status) => {
    switch (status.code) {
      case grpcWeb.StatusCode.OK: {
        resolve(arg);
        break;
      }
      default: {
        reject(new GRPCError(status.code, status.details));
        break;
      }
    }
  };
}
function errHandle(reject: (reason?: GRPCError) => void) {
  return (err: grpcWeb.Error, _resp: Message) => {
    if (err) {
      reject(new GRPCError(err.code, err.message));
    }
  };
}

function promiseTimeout<T>(timeout: number, promise: Promise<T>): Promise<T> {
  return new Promise(function(resolve, reject) {
    // create a timeout to reject promise if not resolved
    const timer = setTimeout(function() {
      reject(new GRPCError(-1, 'Timeout error.'));
    }, timeout);

    promise
      .then(function(res) {
        clearTimeout(timer);
        resolve(res);
      })
      .catch(function(err) {
        clearTimeout(timer);
        reject(err);
      });
  });
}
export default class Client {
  public readonly GRPCProxyHost: string;
  public TimeOut: number;
  private deployServiceClient: DeployServiceClient;
  public constructor(GRPCProxyHost: string, TimeOut: number) {
    this.GRPCProxyHost = GRPCProxyHost;
    this.TimeOut = TimeOut;
    this.deployServiceClient = new DeployServiceClient(this.GRPCProxyHost, null, null);
  }

  public showBlock(blockHash: string): Promise<BlockInfo> {
    return promiseTimeout(this.TimeOut * 1000, this._showBlock(blockHash));
  }

  public showBlocks(depth: number): Promise<LightBlockInfo[]> {
    return promiseTimeout(this.TimeOut * 1000, this._showBlocks(depth));
  }

  public findDeploy(deployId: string): Promise<LightBlockInfo> {
    return promiseTimeout(this.TimeOut * 1000, this._findDeploy(deployId));
  }

  public isFinalized(hash: string): Promise<boolean> {
    return promiseTimeout(this.TimeOut * 1000, this._isFinalized(hash));
  }

  public lastFinalizedBlock(): Promise<BlockInfo> {
    return promiseTimeout(this.TimeOut * 1000, this._lastFinalizedBlock());
  }

  private _showBlock(blockHash: string): Promise<BlockInfo> {
    return new Promise<BlockInfo>((resolve, reject) => {
      setTimeout(() => {
        const query = new BlockQuery();
        query.setHash(blockHash);
        const call = this.deployServiceClient.getBlock(query, {}, errHandle(reject));
        call.on('data', (resp: BlockResponse) => {
          const blockInfo = resp.getBlockinfo();
          if (blockInfo === undefined) {
            reject(new GRPCError(-1, 'block info undefined'));
          } else {
            const block: BlockInfo = {
              blockHash: blockInfo.getBlockhash(),
              blockSize: blockInfo.getBlocksize(),
              blockNumber: blockInfo.getBlocknumber(),
              version: blockInfo.getVersion(),
              deployCount: blockInfo.getDeploycount(),
              tupleSpaceHash: blockInfo.getTuplespacehash(),
              timestamp: blockInfo.getTimestamp(),
              faultTolerance: blockInfo.getFaulttolerance(),
              mainParentHash: blockInfo.getMainparenthash(),
              parentsHashList: blockInfo.getParentshashlistList(),
              sender: blockInfo.getSender(),
              shardId: blockInfo.getShardid(),
              bondsValidatorList: blockInfo.getBondsvalidatorlistList(),
              deployCost: blockInfo.getDeploycostList()
            };
            resolve(block);
          }
        });
        call.on('status', statusHandle(reject));
      }, TIMEOUT);
    });
  }
  private _showBlocks(depth: number): Promise<LightBlockInfo[]> {
    return new Promise<LightBlockInfo[]>((resolve, reject) => {
      setTimeout(() => {
        const query = new BlocksQuery();
        query.setDepth(depth);
        const call = this.deployServiceClient.getBlocks(query, {});
        const blockInfos: LightBlockInfo[] = [];
        call.on('data', (resp: BlockInfoResponse) => {
          const lightBlockInfo = resp.getBlockinfo();
          if (lightBlockInfo) {
            const lightBlock: LightBlockInfo = {
              blockHash: lightBlockInfo.getBlockhash(),
              blockSize: lightBlockInfo.getBlocksize(),
              blockNumber: lightBlockInfo.getBlocknumber(),
              version: lightBlockInfo.getVersion(),
              deployCount: lightBlockInfo.getDeploycount(),
              tupleSpaceHash: lightBlockInfo.getTuplespacehash(),
              timestamp: lightBlockInfo.getTimestamp(),
              faulTolenrance: lightBlockInfo.getFaulttolerance(),
              mainParentHash: lightBlockInfo.getMainparenthash(),
              parentsHashList: lightBlockInfo.getParentshashlistList(),
              sender: lightBlockInfo.getSender()
            };
            blockInfos.push(lightBlock);
          }
        });
        call.on('status', statusHandleResolve(blockInfos, resolve, reject));
      }, TIMEOUT);
    });
  }

  private _findDeploy(deployId: string): Promise<LightBlockInfo> {
    return new Promise<LightBlockInfo>((resolve, reject) => {
      setTimeout(() => {
        const query = new FindDeployQuery();
        query.setDeployid(deployId);
        const call = this.deployServiceClient.findDeploy(query, {}, errHandle(reject));
        call.on('data', (resp: FindDeployResponse) => {
          const lightBlockInfo = resp.getBlockinfo();
          if (lightBlockInfo) {
            const lightBlock: LightBlockInfo = {
              blockHash: lightBlockInfo.getBlockhash(),
              blockSize: lightBlockInfo.getBlocksize(),
              blockNumber: lightBlockInfo.getBlocknumber(),
              version: lightBlockInfo.getVersion(),
              deployCount: lightBlockInfo.getDeploycount(),
              tupleSpaceHash: lightBlockInfo.getTuplespacehash(),
              timestamp: lightBlockInfo.getTimestamp(),
              faulTolenrance: lightBlockInfo.getFaulttolerance(),
              mainParentHash: lightBlockInfo.getMainparenthash(),
              parentsHashList: lightBlockInfo.getParentshashlistList(),
              sender: lightBlockInfo.getSender()
            };
            resolve(lightBlock);
          } else {
            reject(new GRPCError(-1, 'deploy not found'));
          }
        });
        call.on('status', statusHandle(reject));
      }, TIMEOUT);
    });
  }

  private _isFinalized(hash: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        const query = new IsFinalizedQuery();
        query.setHash(hash);
        const call = this.deployServiceClient.isFinalized(query, {}, errHandle(reject));
        call.on('data', (resp: IsFinalizedResponse) => {
          const isFinalized = resp.getIsfinalized();
          resolve(isFinalized);
        });
        call.on('status', statusHandle(reject));
      }, TIMEOUT);
    });
  }
  private _lastFinalizedBlock(): Promise<BlockInfo> {
    return new Promise<BlockInfo>((resolve, reject) => {
      setTimeout(() => {
        const query = new LastFinalizedBlockQuery();
        const call = this.deployServiceClient.lastFinalizedBlock(query, {}, errHandle(reject));
        call.on('data', (resp: LastFinalizedBlockResponse) => {
          const lastFinalizedBlock = resp.getBlockinfo();
          if (lastFinalizedBlock) {
            const blockInfo: BlockInfo = {
              blockHash: lastFinalizedBlock.getBlockhash(),
              blockSize: lastFinalizedBlock.getBlocksize(),
              blockNumber: lastFinalizedBlock.getBlocknumber(),
              version: lastFinalizedBlock.getVersion(),
              deployCount: lastFinalizedBlock.getDeploycount(),
              tupleSpaceHash: lastFinalizedBlock.getTuplespacehash(),
              timestamp: lastFinalizedBlock.getTimestamp(),
              faultTolerance: lastFinalizedBlock.getFaulttolerance(),
              mainParentHash: lastFinalizedBlock.getMainparenthash(),
              parentsHashList: lastFinalizedBlock.getParentshashlistList(),
              sender: lastFinalizedBlock.getSender(),
              shardId: lastFinalizedBlock.getShardid(),
              bondsValidatorList: lastFinalizedBlock.getBondsvalidatorlistList(),
              deployCost: lastFinalizedBlock.getDeploycostList()
            };
            resolve(blockInfo);
          }
        });
        call.on('status', statusHandle(reject));
      }, TIMEOUT);
    });
  }

  // public visualizeDag(depth: number, showJustificationLines: boolean) {}
}
