import * as jspb from "google-protobuf"

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class CmdRequest extends jspb.Message {
  getLine(): string;
  setLine(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CmdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CmdRequest): CmdRequest.AsObject;
  static serializeBinaryToWriter(message: CmdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CmdRequest;
  static deserializeBinaryFromReader(message: CmdRequest, reader: jspb.BinaryReader): CmdRequest;
}

export namespace CmdRequest {
  export type AsObject = {
    line: string,
  }
}

export class EvalRequest extends jspb.Message {
  getProgram(): string;
  setProgram(value: string): void;

  getPrintunmatchedsendsonly(): boolean;
  setPrintunmatchedsendsonly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EvalRequest): EvalRequest.AsObject;
  static serializeBinaryToWriter(message: EvalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalRequest;
  static deserializeBinaryFromReader(message: EvalRequest, reader: jspb.BinaryReader): EvalRequest;
}

export namespace EvalRequest {
  export type AsObject = {
    program: string,
    printunmatchedsendsonly: boolean,
  }
}

export class ReplResponse extends jspb.Message {
  getOutput(): string;
  setOutput(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplResponse): ReplResponse.AsObject;
  static serializeBinaryToWriter(message: ReplResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplResponse;
  static deserializeBinaryFromReader(message: ReplResponse, reader: jspb.BinaryReader): ReplResponse;
}

export namespace ReplResponse {
  export type AsObject = {
    output: string,
  }
}

