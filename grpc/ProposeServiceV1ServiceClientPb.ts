/**
 * @fileoverview gRPC-Web generated client stub for casper.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as ServiceError_pb from './ServiceError_pb';
import * as ProposeServiceCommon_pb from './ProposeServiceCommon_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

import {ProposeResponse} from './ProposeServiceV1_pb';

export class ProposeServiceClient {
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

  methodInfopropose = new grpcWeb.AbstractClientBase.MethodInfo(
    ProposeResponse,
    (request: ProposeServiceCommon_pb.PrintUnmatchedSendsQuery) => {
      return request.serializeBinary();
    },
    ProposeResponse.deserializeBinary
  );

  propose(
    request: ProposeServiceCommon_pb.PrintUnmatchedSendsQuery,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProposeResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/casper.v1.ProposeService/propose',
      request,
      metadata || {},
      this.methodInfopropose,
      callback);
  }

}

