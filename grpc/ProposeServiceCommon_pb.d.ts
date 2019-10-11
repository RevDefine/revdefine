import * as jspb from "google-protobuf"

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class PrintUnmatchedSendsQuery extends jspb.Message {
  getPrintunmatchedsends(): boolean;
  setPrintunmatchedsends(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrintUnmatchedSendsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PrintUnmatchedSendsQuery): PrintUnmatchedSendsQuery.AsObject;
  static serializeBinaryToWriter(message: PrintUnmatchedSendsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrintUnmatchedSendsQuery;
  static deserializeBinaryFromReader(message: PrintUnmatchedSendsQuery, reader: jspb.BinaryReader): PrintUnmatchedSendsQuery;
}

export namespace PrintUnmatchedSendsQuery {
  export type AsObject = {
    printunmatchedsends: boolean,
  }
}

