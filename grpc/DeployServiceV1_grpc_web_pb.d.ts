import * as grpcWeb from 'grpc-web';

import * as CasperMessage_pb from './CasperMessage_pb';
import * as ServiceError_pb from './ServiceError_pb';
import * as DeployServiceCommon_pb from './DeployServiceCommon_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

import {
  BlockInfoResponse,
  BlockResponse,
  ContinuationAtNameResponse,
  DeployResponse,
  FindDeployResponse,
  IsFinalizedResponse,
  LastFinalizedBlockResponse,
  ListeningNameDataResponse,
  MachineVerifyResponse,
  PrivateNamePreviewResponse,
  VisualizeBlocksResponse} from './DeployServiceV1_pb';

export class DeployServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  doDeploy(
    request: CasperMessage_pb.DeployDataProto,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: DeployResponse) => void
  ): grpcWeb.ClientReadableStream<DeployResponse>;

  getBlock(
    request: DeployServiceCommon_pb.BlockQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: BlockResponse) => void
  ): grpcWeb.ClientReadableStream<BlockResponse>;

  visualizeDag(
    request: DeployServiceCommon_pb.VisualizeDagQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<VisualizeBlocksResponse>;

  machineVerifiableDag(
    request: DeployServiceCommon_pb.MachineVerifyQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MachineVerifyResponse) => void
  ): grpcWeb.ClientReadableStream<MachineVerifyResponse>;

  showMainChain(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<BlockInfoResponse>;

  getBlocks(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<BlockInfoResponse>;

  listenForDataAtName(
    request: DeployServiceCommon_pb.DataAtNameQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListeningNameDataResponse) => void
  ): grpcWeb.ClientReadableStream<ListeningNameDataResponse>;

  listenForContinuationAtName(
    request: DeployServiceCommon_pb.ContinuationAtNameQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ContinuationAtNameResponse) => void
  ): grpcWeb.ClientReadableStream<ContinuationAtNameResponse>;

  findDeploy(
    request: DeployServiceCommon_pb.FindDeployQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: FindDeployResponse) => void
  ): grpcWeb.ClientReadableStream<FindDeployResponse>;

  previewPrivateNames(
    request: DeployServiceCommon_pb.PrivateNamePreviewQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PrivateNamePreviewResponse) => void
  ): grpcWeb.ClientReadableStream<PrivateNamePreviewResponse>;

  lastFinalizedBlock(
    request: DeployServiceCommon_pb.LastFinalizedBlockQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: LastFinalizedBlockResponse) => void
  ): grpcWeb.ClientReadableStream<LastFinalizedBlockResponse>;

  isFinalized(
    request: DeployServiceCommon_pb.IsFinalizedQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: IsFinalizedResponse) => void
  ): grpcWeb.ClientReadableStream<IsFinalizedResponse>;

}

export class DeployServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  doDeploy(
    request: CasperMessage_pb.DeployDataProto,
    metadata?: grpcWeb.Metadata
  ): Promise<DeployResponse>;

  getBlock(
    request: DeployServiceCommon_pb.BlockQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<BlockResponse>;

  visualizeDag(
    request: DeployServiceCommon_pb.VisualizeDagQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<VisualizeBlocksResponse>;

  machineVerifiableDag(
    request: DeployServiceCommon_pb.MachineVerifyQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<MachineVerifyResponse>;

  showMainChain(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<BlockInfoResponse>;

  getBlocks(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<BlockInfoResponse>;

  listenForDataAtName(
    request: DeployServiceCommon_pb.DataAtNameQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<ListeningNameDataResponse>;

  listenForContinuationAtName(
    request: DeployServiceCommon_pb.ContinuationAtNameQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<ContinuationAtNameResponse>;

  findDeploy(
    request: DeployServiceCommon_pb.FindDeployQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<FindDeployResponse>;

  previewPrivateNames(
    request: DeployServiceCommon_pb.PrivateNamePreviewQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<PrivateNamePreviewResponse>;

  lastFinalizedBlock(
    request: DeployServiceCommon_pb.LastFinalizedBlockQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<LastFinalizedBlockResponse>;

  isFinalized(
    request: DeployServiceCommon_pb.IsFinalizedQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<IsFinalizedResponse>;

}

