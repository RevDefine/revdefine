import * as jspb from 'google-protobuf';

import * as CasperMessage_pb from './CasperMessage_pb';
import * as ServiceError_pb from './ServiceError_pb';
import * as DeployServiceCommon_pb from './DeployServiceCommon_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class DeployResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getResult(): string;
  setResult(value: string): void;

  getMessageCase(): DeployResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeployResponse
  ): DeployResponse.AsObject;
  static serializeBinaryToWriter(
    message: DeployResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeployResponse;
  static deserializeBinaryFromReader(
    message: DeployResponse,
    reader: jspb.BinaryReader
  ): DeployResponse;
}

export namespace DeployResponse {
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

export class BlockResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getBlockinfo(): DeployServiceCommon_pb.BlockInfo | undefined;
  setBlockinfo(value?: DeployServiceCommon_pb.BlockInfo): void;
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;

  getMessageCase(): BlockResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockResponse
  ): BlockResponse.AsObject;
  static serializeBinaryToWriter(
    message: BlockResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(
    message: BlockResponse,
    reader: jspb.BinaryReader
  ): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    blockinfo?: DeployServiceCommon_pb.BlockInfo.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    BLOCKINFO = 2
  }
}

export class VisualizeBlocksResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getContent(): string;
  setContent(value: string): void;

  getMessageCase(): VisualizeBlocksResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisualizeBlocksResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: VisualizeBlocksResponse
  ): VisualizeBlocksResponse.AsObject;
  static serializeBinaryToWriter(
    message: VisualizeBlocksResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): VisualizeBlocksResponse;
  static deserializeBinaryFromReader(
    message: VisualizeBlocksResponse,
    reader: jspb.BinaryReader
  ): VisualizeBlocksResponse;
}

export namespace VisualizeBlocksResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    content: string;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    CONTENT = 2
  }
}

export class MachineVerifyResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getContent(): string;
  setContent(value: string): void;

  getMessageCase(): MachineVerifyResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineVerifyResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MachineVerifyResponse
  ): MachineVerifyResponse.AsObject;
  static serializeBinaryToWriter(
    message: MachineVerifyResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MachineVerifyResponse;
  static deserializeBinaryFromReader(
    message: MachineVerifyResponse,
    reader: jspb.BinaryReader
  ): MachineVerifyResponse;
}

export namespace MachineVerifyResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    content: string;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    CONTENT = 2
  }
}

export class BlockInfoResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getBlockinfo(): DeployServiceCommon_pb.LightBlockInfo | undefined;
  setBlockinfo(value?: DeployServiceCommon_pb.LightBlockInfo): void;
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;

  getMessageCase(): BlockInfoResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfoResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockInfoResponse
  ): BlockInfoResponse.AsObject;
  static serializeBinaryToWriter(
    message: BlockInfoResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfoResponse;
  static deserializeBinaryFromReader(
    message: BlockInfoResponse,
    reader: jspb.BinaryReader
  ): BlockInfoResponse;
}

export namespace BlockInfoResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    blockinfo?: DeployServiceCommon_pb.LightBlockInfo.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    BLOCKINFO = 2
  }
}

export class ListeningNameDataResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getPayload(): ListeningNameDataPayload | undefined;
  setPayload(value?: ListeningNameDataPayload): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getMessageCase(): ListeningNameDataResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListeningNameDataResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListeningNameDataResponse
  ): ListeningNameDataResponse.AsObject;
  static serializeBinaryToWriter(
    message: ListeningNameDataResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListeningNameDataResponse;
  static deserializeBinaryFromReader(
    message: ListeningNameDataResponse,
    reader: jspb.BinaryReader
  ): ListeningNameDataResponse;
}

export namespace ListeningNameDataResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    payload?: ListeningNameDataPayload.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    PAYLOAD = 2
  }
}

export class ListeningNameDataPayload extends jspb.Message {
  getBlockinfoList(): Array<DeployServiceCommon_pb.DataWithBlockInfo>;
  setBlockinfoList(
    value: Array<DeployServiceCommon_pb.DataWithBlockInfo>
  ): void;
  clearBlockinfoList(): void;
  addBlockinfo(
    value?: DeployServiceCommon_pb.DataWithBlockInfo,
    index?: number
  ): DeployServiceCommon_pb.DataWithBlockInfo;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListeningNameDataPayload.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListeningNameDataPayload
  ): ListeningNameDataPayload.AsObject;
  static serializeBinaryToWriter(
    message: ListeningNameDataPayload,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListeningNameDataPayload;
  static deserializeBinaryFromReader(
    message: ListeningNameDataPayload,
    reader: jspb.BinaryReader
  ): ListeningNameDataPayload;
}

export namespace ListeningNameDataPayload {
  export type AsObject = {
    blockinfoList: Array<DeployServiceCommon_pb.DataWithBlockInfo.AsObject>;
    length: number;
  };
}

export class ContinuationAtNameResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getPayload(): ContinuationAtNamePayload | undefined;
  setPayload(value?: ContinuationAtNamePayload): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getMessageCase(): ContinuationAtNameResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationAtNameResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ContinuationAtNameResponse
  ): ContinuationAtNameResponse.AsObject;
  static serializeBinaryToWriter(
    message: ContinuationAtNameResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationAtNameResponse;
  static deserializeBinaryFromReader(
    message: ContinuationAtNameResponse,
    reader: jspb.BinaryReader
  ): ContinuationAtNameResponse;
}

export namespace ContinuationAtNameResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    payload?: ContinuationAtNamePayload.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    PAYLOAD = 2
  }
}

export class ContinuationAtNamePayload extends jspb.Message {
  getBlockresultsList(): Array<
    DeployServiceCommon_pb.ContinuationsWithBlockInfo
  >;
  setBlockresultsList(
    value: Array<DeployServiceCommon_pb.ContinuationsWithBlockInfo>
  ): void;
  clearBlockresultsList(): void;
  addBlockresults(
    value?: DeployServiceCommon_pb.ContinuationsWithBlockInfo,
    index?: number
  ): DeployServiceCommon_pb.ContinuationsWithBlockInfo;

  getLength(): number;
  setLength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationAtNamePayload.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ContinuationAtNamePayload
  ): ContinuationAtNamePayload.AsObject;
  static serializeBinaryToWriter(
    message: ContinuationAtNamePayload,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationAtNamePayload;
  static deserializeBinaryFromReader(
    message: ContinuationAtNamePayload,
    reader: jspb.BinaryReader
  ): ContinuationAtNamePayload;
}

export namespace ContinuationAtNamePayload {
  export type AsObject = {
    blockresultsList: Array<
      DeployServiceCommon_pb.ContinuationsWithBlockInfo.AsObject
    >;
    length: number;
  };
}

export class FindDeployResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getBlockinfo(): DeployServiceCommon_pb.LightBlockInfo | undefined;
  setBlockinfo(value?: DeployServiceCommon_pb.LightBlockInfo): void;
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;

  getMessageCase(): FindDeployResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindDeployResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FindDeployResponse
  ): FindDeployResponse.AsObject;
  static serializeBinaryToWriter(
    message: FindDeployResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): FindDeployResponse;
  static deserializeBinaryFromReader(
    message: FindDeployResponse,
    reader: jspb.BinaryReader
  ): FindDeployResponse;
}

export namespace FindDeployResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    blockinfo?: DeployServiceCommon_pb.LightBlockInfo.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    BLOCKINFO = 2
  }
}

export class PrivateNamePreviewResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getPayload(): PrivateNamePreviewPayload | undefined;
  setPayload(value?: PrivateNamePreviewPayload): void;
  hasPayload(): boolean;
  clearPayload(): void;

  getMessageCase(): PrivateNamePreviewResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNamePreviewResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PrivateNamePreviewResponse
  ): PrivateNamePreviewResponse.AsObject;
  static serializeBinaryToWriter(
    message: PrivateNamePreviewResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNamePreviewResponse;
  static deserializeBinaryFromReader(
    message: PrivateNamePreviewResponse,
    reader: jspb.BinaryReader
  ): PrivateNamePreviewResponse;
}

export namespace PrivateNamePreviewResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    payload?: PrivateNamePreviewPayload.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    PAYLOAD = 2
  }
}

export class PrivateNamePreviewPayload extends jspb.Message {
  getIdsList(): Array<Uint8Array | string>;
  setIdsList(value: Array<Uint8Array | string>): void;
  clearIdsList(): void;
  addIds(value: Uint8Array | string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNamePreviewPayload.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PrivateNamePreviewPayload
  ): PrivateNamePreviewPayload.AsObject;
  static serializeBinaryToWriter(
    message: PrivateNamePreviewPayload,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNamePreviewPayload;
  static deserializeBinaryFromReader(
    message: PrivateNamePreviewPayload,
    reader: jspb.BinaryReader
  ): PrivateNamePreviewPayload;
}

export namespace PrivateNamePreviewPayload {
  export type AsObject = {
    idsList: Array<Uint8Array | string>;
  };
}

export class LastFinalizedBlockResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getBlockinfo(): DeployServiceCommon_pb.BlockInfo | undefined;
  setBlockinfo(value?: DeployServiceCommon_pb.BlockInfo): void;
  hasBlockinfo(): boolean;
  clearBlockinfo(): void;

  getMessageCase(): LastFinalizedBlockResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFinalizedBlockResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LastFinalizedBlockResponse
  ): LastFinalizedBlockResponse.AsObject;
  static serializeBinaryToWriter(
    message: LastFinalizedBlockResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LastFinalizedBlockResponse;
  static deserializeBinaryFromReader(
    message: LastFinalizedBlockResponse,
    reader: jspb.BinaryReader
  ): LastFinalizedBlockResponse;
}

export namespace LastFinalizedBlockResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    blockinfo?: DeployServiceCommon_pb.BlockInfo.AsObject;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    BLOCKINFO = 2
  }
}

export class IsFinalizedResponse extends jspb.Message {
  getError(): ServiceError_pb.ServiceError | undefined;
  setError(value?: ServiceError_pb.ServiceError): void;
  hasError(): boolean;
  clearError(): void;

  getIsfinalized(): boolean;
  setIsfinalized(value: boolean): void;

  getMessageCase(): IsFinalizedResponse.MessageCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsFinalizedResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: IsFinalizedResponse
  ): IsFinalizedResponse.AsObject;
  static serializeBinaryToWriter(
    message: IsFinalizedResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): IsFinalizedResponse;
  static deserializeBinaryFromReader(
    message: IsFinalizedResponse,
    reader: jspb.BinaryReader
  ): IsFinalizedResponse;
}

export namespace IsFinalizedResponse {
  export type AsObject = {
    error?: ServiceError_pb.ServiceError.AsObject;
    isfinalized: boolean;
  };

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ERROR = 1,
    ISFINALIZED = 2
  }
}
