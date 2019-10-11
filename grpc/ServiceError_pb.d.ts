import * as jspb from "google-protobuf"

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class ServiceError extends jspb.Message {
  getMessagesList(): Array<string>;
  setMessagesList(value: Array<string>): void;
  clearMessagesList(): void;
  addMessages(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceError.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceError): ServiceError.AsObject;
  static serializeBinaryToWriter(message: ServiceError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceError;
  static deserializeBinaryFromReader(message: ServiceError, reader: jspb.BinaryReader): ServiceError;
}

export namespace ServiceError {
  export type AsObject = {
    messagesList: Array<string>,
  }
}

