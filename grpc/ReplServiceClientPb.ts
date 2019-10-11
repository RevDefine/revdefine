/**
 * @fileoverview gRPC-Web generated client stub for repl
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

import {
  CmdRequest,
  EvalRequest,
  ReplResponse} from './repl_pb';

export class ReplClient {
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

  methodInfoRun = new grpcWeb.AbstractClientBase.MethodInfo(
    ReplResponse,
    (request: CmdRequest) => {
      return request.serializeBinary();
    },
    ReplResponse.deserializeBinary
  );

  run(
    request: CmdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReplResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/repl.Repl/Run',
      request,
      metadata || {},
      this.methodInfoRun,
      callback);
  }

  methodInfoEval = new grpcWeb.AbstractClientBase.MethodInfo(
    ReplResponse,
    (request: EvalRequest) => {
      return request.serializeBinary();
    },
    ReplResponse.deserializeBinary
  );

  eval(
    request: EvalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReplResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/repl.Repl/Eval',
      request,
      metadata || {},
      this.methodInfoEval,
      callback);
  }

}

