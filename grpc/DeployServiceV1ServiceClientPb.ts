/**
 * @fileoverview gRPC-Web generated client stub for casper.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


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
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfodoDeploy = new grpcWeb.AbstractClientBase.MethodInfo(
    DeployResponse,
    (request: CasperMessage_pb.DeployDataProto) => {
      return request.serializeBinary();
    },
    DeployResponse.deserializeBinary
  );

  doDeploy(
    request: CasperMessage_pb.DeployDataProto,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeployResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/doDeploy',
      request,
      metadata || {},
      this.methodInfodoDeploy,
      callback);
  }

  methodInfogetBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockResponse,
    (request: DeployServiceCommon_pb.BlockQuery) => {
      return request.serializeBinary();
    },
    BlockResponse.deserializeBinary
  );

  getBlock(
    request: DeployServiceCommon_pb.BlockQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: BlockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/getBlock',
      request,
      metadata || {},
      this.methodInfogetBlock,
      callback);
  }

  methodInfovisualizeDag = new grpcWeb.AbstractClientBase.MethodInfo(
    VisualizeBlocksResponse,
    (request: DeployServiceCommon_pb.VisualizeDagQuery) => {
      return request.serializeBinary();
    },
    VisualizeBlocksResponse.deserializeBinary
  );

  visualizeDag(
    request: DeployServiceCommon_pb.VisualizeDagQuery,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/casper.v1.DeployService/visualizeDag',
      request,
      metadata || {},
      this.methodInfovisualizeDag);
  }

  methodInfomachineVerifiableDag = new grpcWeb.AbstractClientBase.MethodInfo(
    MachineVerifyResponse,
    (request: DeployServiceCommon_pb.MachineVerifyQuery) => {
      return request.serializeBinary();
    },
    MachineVerifyResponse.deserializeBinary
  );

  machineVerifiableDag(
    request: DeployServiceCommon_pb.MachineVerifyQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: MachineVerifyResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/machineVerifiableDag',
      request,
      metadata || {},
      this.methodInfomachineVerifiableDag,
      callback);
  }

  methodInfoshowMainChain = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockInfoResponse,
    (request: DeployServiceCommon_pb.BlocksQuery) => {
      return request.serializeBinary();
    },
    BlockInfoResponse.deserializeBinary
  );

  showMainChain(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/casper.v1.DeployService/showMainChain',
      request,
      metadata || {},
      this.methodInfoshowMainChain);
  }

  methodInfogetBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockInfoResponse,
    (request: DeployServiceCommon_pb.BlocksQuery) => {
      return request.serializeBinary();
    },
    BlockInfoResponse.deserializeBinary
  );

  getBlocks(
    request: DeployServiceCommon_pb.BlocksQuery,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/casper.v1.DeployService/getBlocks',
      request,
      metadata || {},
      this.methodInfogetBlocks);
  }

  methodInfolistenForDataAtName = new grpcWeb.AbstractClientBase.MethodInfo(
    ListeningNameDataResponse,
    (request: DeployServiceCommon_pb.DataAtNameQuery) => {
      return request.serializeBinary();
    },
    ListeningNameDataResponse.deserializeBinary
  );

  listenForDataAtName(
    request: DeployServiceCommon_pb.DataAtNameQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListeningNameDataResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/listenForDataAtName',
      request,
      metadata || {},
      this.methodInfolistenForDataAtName,
      callback);
  }

  methodInfolistenForContinuationAtName = new grpcWeb.AbstractClientBase.MethodInfo(
    ContinuationAtNameResponse,
    (request: DeployServiceCommon_pb.ContinuationAtNameQuery) => {
      return request.serializeBinary();
    },
    ContinuationAtNameResponse.deserializeBinary
  );

  listenForContinuationAtName(
    request: DeployServiceCommon_pb.ContinuationAtNameQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ContinuationAtNameResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/listenForContinuationAtName',
      request,
      metadata || {},
      this.methodInfolistenForContinuationAtName,
      callback);
  }

  methodInfofindDeploy = new grpcWeb.AbstractClientBase.MethodInfo(
    FindDeployResponse,
    (request: DeployServiceCommon_pb.FindDeployQuery) => {
      return request.serializeBinary();
    },
    FindDeployResponse.deserializeBinary
  );

  findDeploy(
    request: DeployServiceCommon_pb.FindDeployQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FindDeployResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/findDeploy',
      request,
      metadata || {},
      this.methodInfofindDeploy,
      callback);
  }

  methodInfopreviewPrivateNames = new grpcWeb.AbstractClientBase.MethodInfo(
    PrivateNamePreviewResponse,
    (request: DeployServiceCommon_pb.PrivateNamePreviewQuery) => {
      return request.serializeBinary();
    },
    PrivateNamePreviewResponse.deserializeBinary
  );

  previewPrivateNames(
    request: DeployServiceCommon_pb.PrivateNamePreviewQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: PrivateNamePreviewResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/previewPrivateNames',
      request,
      metadata || {},
      this.methodInfopreviewPrivateNames,
      callback);
  }

  methodInfolastFinalizedBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    LastFinalizedBlockResponse,
    (request: DeployServiceCommon_pb.LastFinalizedBlockQuery) => {
      return request.serializeBinary();
    },
    LastFinalizedBlockResponse.deserializeBinary
  );

  lastFinalizedBlock(
    request: DeployServiceCommon_pb.LastFinalizedBlockQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LastFinalizedBlockResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/lastFinalizedBlock',
      request,
      metadata || {},
      this.methodInfolastFinalizedBlock,
      callback);
  }

  methodInfoisFinalized = new grpcWeb.AbstractClientBase.MethodInfo(
    IsFinalizedResponse,
    (request: DeployServiceCommon_pb.IsFinalizedQuery) => {
      return request.serializeBinary();
    },
    IsFinalizedResponse.deserializeBinary
  );

  isFinalized(
    request: DeployServiceCommon_pb.IsFinalizedQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: IsFinalizedResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.DeployService/isFinalized',
      request,
      metadata || {},
      this.methodInfoisFinalized,
      callback);
  }

}

