import * as grpcWeb from 'grpc-web';

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

import {
  CmdRequest,
  EvalRequest,
  ReplResponse} from './repl_pb';

export class ReplClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  run(
    request: CmdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ReplResponse) => void
  ): grpcWeb.ClientReadableStream<ReplResponse>;

  eval(
    request: EvalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ReplResponse) => void
  ): grpcWeb.ClientReadableStream<ReplResponse>;

}

export class ReplPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  run(
    request: CmdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReplResponse>;

  eval(
    request: EvalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReplResponse>;

}

