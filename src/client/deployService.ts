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
import { BlockInfo, LightBlockInfo, GRPCError } from './types';
import { Message } from 'google-protobuf';

const TIMEOUT = 1000;

function statusHandle(reject: (reason?: GRPCError) => void) {
  return (status: grpcWeb.Status) => {
    switch (status.code) {
      case grpcWeb.StatusCode.OK: {
        break;
      }
      default: {
        const err: GRPCError = {
          code: status.code,
          message: status.details
        };
        reject(err);
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
        const err: GRPCError = {
          code: status.code,
          message: status.details
        };
        reject(err);
        break;
      }
    }
  };
}
function errHandle(reject: (reason?: GRPCError) => void) {
  return (err: grpcWeb.Error, _resp: Message) => {
    if (err) {
      const e: GRPCError = { code: err.code, message: err.message };
      reject(e);
    }
  };
}

export default class Client {
  public readonly GRPCProxyHost: string;
  public TimeOut: number;
  private deployServiceClient: DeployServiceClient;
  public constructor(GRPCProxyHost: string, TimeOut: number = TIMEOUT) {
    this.GRPCProxyHost = GRPCProxyHost;
    this.TimeOut = TimeOut;
    this.deployServiceClient = new DeployServiceClient(this.GRPCProxyHost, null, null);
  }

  public showBlock(blockHash: string): Promise<BlockInfo> {
    return new Promise<BlockInfo>((resolve, reject) => {
      setTimeout(() => {
        const query = new BlockQuery();
        query.setHash(blockHash);
        const call = this.deployServiceClient.getBlock(query, {}, errHandle(reject));
        call.on('data', (resp: BlockResponse) => {
          const blockInfo = resp.getBlockinfo();
          if (blockInfo === undefined) {
            const err: GRPCError = {
              code: -1,
              message: 'block info undefined'
            };
            reject(err);
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
      }, this.TimeOut);
    });
  }
  public showBlocks(depth: number): Promise<LightBlockInfo[]> {
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
      }, this.TimeOut);
    });
  }

  public findDeploy(deployId: string): Promise<LightBlockInfo> {
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
            const err: GRPCError = {
              code: -1,
              message: 'deploy not found'
            };
            reject(err);
          }
        });
        call.on('status', statusHandle(reject));
      }, this.TimeOut);
    });
  }

  public isFinalized(hash: string): Promise<boolean> {
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
      }, this.TimeOut);
    });
  }
  public lastFinalizedBlock(): Promise<BlockInfo> {
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
      }, this.TimeOut);
    });
  }

  // public visualizeDag(depth: number, showJustificationLines: boolean) {}
}
