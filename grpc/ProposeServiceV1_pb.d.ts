import * as jspb from 'google-protobuf';

import * as ServiceError_pb from './ServiceError_pb';
import * as ProposeServiceCommon_pb from './ProposeServiceCommon_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class ProposeResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getResult(): string;
  setResult(value: string): void;

  getMessageCase(): ProposeResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposeResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ProposeResponse
  ): ProposeResponse.AsObject;
  static serializeBinaryToWriter(
    message: ProposeResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ProposeResponse;
  static deserializeBinaryFromReader(
    message: ProposeResponse,
    reader: jspb.BinaryReader
  ): ProposeResponse;
}

export namespace ProposeResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    result: string;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    RESULT = 2
  }
}
