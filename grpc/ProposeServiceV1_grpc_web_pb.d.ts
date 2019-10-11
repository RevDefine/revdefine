import * as grpcWeb from 'grpc-web';

import * as ServiceError_pb from './ServiceError_pb';
import * as ProposeServiceCommon_pb from './ProposeServiceCommon_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

import {ProposeResponse} from './ProposeServiceV1_pb';

export class ProposeServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  propose(
    request: ProposeServiceCommon_pb.PrintUnmatchedSendsQuery,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ProposeResponse) => void
  ): grpcWeb.ClientReadableStream<ProposeResponse>;

}

export class ProposeServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  propose(
    request: ProposeServiceCommon_pb.PrintUnmatchedSendsQuery,
    metadata?: grpcWeb.Metadata
  ): Promise<ProposeResponse>;

}

