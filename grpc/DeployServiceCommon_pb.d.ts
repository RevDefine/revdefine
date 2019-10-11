import * as jspb from 'google-protobuf';

import * as CasperMessage_pb from './CasperMessage_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';
import * as RhoTypes_pb from './RhoTypes_pb';

export class FindDeployQuery extends jspb.Message {
  getDeployid(): Uint8Array | string;
  getDeployid_asU8(): Uint8Array;
  getDeployid_asB64(): string;
  setDeployid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindDeployQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FindDeployQuery
  ): FindDeployQuery.AsObject;
  static serializeBinaryToWriter(
    message: FindDeployQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): FindDeployQuery;
  static deserializeBinaryFromReader(
    message: FindDeployQuery,
    reader: jspb.BinaryReader
  ): FindDeployQuery;
}

export namespace FindDeployQuery {
  export type AsObject = {
    deployid: Uint8Array | string;
  };
}

export class BlockQuery extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockQuery
  ): BlockQuery.AsObject;
  static serializeBinaryToWriter(
    message: BlockQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockQuery;
  static deserializeBinaryFromReader(
    message: BlockQuery,
    reader: jspb.BinaryReader
  ): BlockQuery;
}

export namespace BlockQuery {
  export type AsObject = {
    hash: string;
  };
}

export class BlocksQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlocksQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlocksQuery
  ): BlocksQuery.AsObject;
  static serializeBinaryToWriter(
    message: BlocksQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlocksQuery;
  static deserializeBinaryFromReader(
    message: BlocksQuery,
    reader: jspb.BinaryReader
  ): BlocksQuery;
}

export namespace BlocksQuery {
  export type AsObject = {
    depth: number;
  };
}

export class DataAtNameQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  getName(): RhoTypes_pb.Par | undefined;
  setName(value?: RhoTypes_pb.Par): void;
  hasName(): boolean;
  clearName(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAtNameQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DataAtNameQuery
  ): DataAtNameQuery.AsObject;
  static serializeBinaryToWriter(
    message: DataAtNameQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DataAtNameQuery;
  static deserializeBinaryFromReader(
    message: DataAtNameQuery,
    reader: jspb.BinaryReader
  ): DataAtNameQuery;
}

export namespace DataAtNameQuery {
  export type AsObject = {
    depth: number;
    name?: RhoTypes_pb.Par.AsObject;
  };
}

export class ContinuationAtNameQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  getNamesList(): Array<RhoTypes_pb.Par>;
  setNamesList(value: Array<RhoTypes_pb.Par>): void;
  clearNamesList(): void;
  addNames(value?: RhoTypes_pb.Par, index?: number): RhoTypes_pb.Par;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationAtNameQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ContinuationAtNameQuery
  ): ContinuationAtNameQuery.AsObject;
  static serializeBinaryToWriter(
    message: ContinuationAtNameQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationAtNameQuery;
  static deserializeBinaryFromReader(
    message: ContinuationAtNameQuery,
    reader: jspb.BinaryReader
  ): ContinuationAtNameQuery;
}

export namespace ContinuationAtNameQuery {
  export type AsObject = {
    depth: number;
    namesList: Array<RhoTypes_pb.Par.AsObject>;
  };
}

export class VisualizeDagQuery extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  getShowjustificationlines(): boolean;
  setShowjustificationlines(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisualizeDagQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: VisualizeDagQuery
  ): VisualizeDagQuery.AsObject;
  static serializeBinaryToWriter(
    message: VisualizeDagQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): VisualizeDagQuery;
  static deserializeBinaryFromReader(
    message: VisualizeDagQuery,
    reader: jspb.BinaryReader
  ): VisualizeDagQuery;
}

export namespace VisualizeDagQuery {
  export type AsObject = {
    depth: number;
    showjustificationlines: boolean;
  };
}

export class MachineVerifyQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineVerifyQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: MachineVerifyQuery
  ): MachineVerifyQuery.AsObject;
  static serializeBinaryToWriter(
    message: MachineVerifyQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): MachineVerifyQuery;
  static deserializeBinaryFromReader(
    message: MachineVerifyQuery,
    reader: jspb.BinaryReader
  ): MachineVerifyQuery;
}

export namespace MachineVerifyQuery {
  export type AsObject = {};
}

export class PrivateNamePreviewQuery extends jspb.Message {
  getUser(): Uint8Array | string;
  getUser_asU8(): Uint8Array;
  getUser_asB64(): string;
  setUser(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getNameqty(): number;
  setNameqty(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrivateNamePreviewQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PrivateNamePreviewQuery
  ): PrivateNamePreviewQuery.AsObject;
  static serializeBinaryToWriter(
    message: PrivateNamePreviewQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PrivateNamePreviewQuery;
  static deserializeBinaryFromReader(
    message: PrivateNamePreviewQuery,
    reader: jspb.BinaryReader
  ): PrivateNamePreviewQuery;
}

export namespace PrivateNamePreviewQuery {
  export type AsObject = {
    user: Uint8Array | string;
    timestamp: number;
    nameqty: number;
  };
}

export class LastFinalizedBlockQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastFinalizedBlockQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LastFinalizedBlockQuery
  ): LastFinalizedBlockQuery.AsObject;
  static serializeBinaryToWriter(
    message: LastFinalizedBlockQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LastFinalizedBlockQuery;
  static deserializeBinaryFromReader(
    message: LastFinalizedBlockQuery,
    reader: jspb.BinaryReader
  ): LastFinalizedBlockQuery;
}

export namespace LastFinalizedBlockQuery {
  export type AsObject = {};
}

export class IsFinalizedQuery extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsFinalizedQuery.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: IsFinalizedQuery
  ): IsFinalizedQuery.AsObject;
  static serializeBinaryToWriter(
    message: IsFinalizedQuery,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): IsFinalizedQuery;
  static deserializeBinaryFromReader(
    message: IsFinalizedQuery,
    reader: jspb.BinaryReader
  ): IsFinalizedQuery;
}

export namespace IsFinalizedQuery {
  export type AsObject = {
    hash: string;
  };
}

export class LightBlockInfo extends jspb.Message {
  getBlockhash(): string;
  setBlockhash(value: string): void;

  getBlocksize(): string;
  setBlocksize(value: string): void;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getTuplespacehash(): string;
  setTuplespacehash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFaulttolerance(): number;
  setFaulttolerance(value: number): void;

  getMainparenthash(): string;
  setMainparenthash(value: string): void;

  getParentshashlistList(): Array<string>;
  setParentshashlistList(value: Array<string>): void;
  clearParentshashlistList(): void;
  addParentshashlist(value: string, index?: number): void;

  getSender(): string;
  setSender(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightBlockInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: LightBlockInfo
  ): LightBlockInfo.AsObject;
  static serializeBinaryToWriter(
    message: LightBlockInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): LightBlockInfo;
  static deserializeBinaryFromReader(
    message: LightBlockInfo,
    reader: jspb.BinaryReader
  ): LightBlockInfo;
}

export namespace LightBlockInfo {
  export type AsObject = {
    blockhash: string;
    blocksize: string;
    blocknumber: number;
    version: number;
    deploycount: number;
    tuplespacehash: string;
    timestamp: number;
    faulttolerance: number;
    mainparenthash: string;
    parentshashlistList: Array<string>;
    sender: string;
  };
}

export class BlockInfo extends jspb.Message {
  getBlockhash(): string;
  setBlockhash(value: string): void;

  getBlocksize(): string;
  setBlocksize(value: string): void;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getTuplespacehash(): string;
  setTuplespacehash(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getFaulttolerance(): number;
  setFaulttolerance(value: number): void;

  getMainparenthash(): string;
  setMainparenthash(value: string): void;

  getParentshashlistList(): Array<string>;
  setParentshashlistList(value: Array<string>): void;
  clearParentshashlistList(): void;
  addParentshashlist(value: string, index?: number): void;

  getSender(): string;
  setSender(value: string): void;

  getShardid(): string;
  setShardid(value: string): void;

  getBondsvalidatorlistList(): Array<string>;
  setBondsvalidatorlistList(value: Array<string>): void;
  clearBondsvalidatorlistList(): void;
  addBondsvalidatorlist(value: string, index?: number): void;

  getDeploycostList(): Array<string>;
  setDeploycostList(value: Array<string>): void;
  clearDeploycostList(): void;
  addDeploycost(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static serializeBinaryToWriter(
    message: BlockInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(
    message: BlockInfo,
    reader: jspb.BinaryReader
  ): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    blockhash: string;
    blocksize: string;
    blocknumber: number;
    version: number;
    deploycount: number;
    tuplespacehash: string;
    timestamp: number;
    faulttolerance: number;
    mainparenthash: string;
    parentshashlistList: Array<string>;
    sender: string;
    shardid: string;
    bondsvalidatorlistList: Array<string>;
    deploycostList: Array<string>;
  };
}

export class DataWithBlockInfo extends jspb.Message {
  getPostblockdataList(): Array<RhoTypes_pb.Par>;
  setPostblockdataList(value: Array<RhoTypes_pb.Par>): void;
  clearPostblockdataList(): void;
  addPostblockdata(value?: RhoTypes_pb.Par, index?: number): RhoTypes_pb.Par;

  getBlock(): LightBlockInfo | undefined;
  setBlock(value?: LightBlockInfo): void;
  hasBlock(): boolean;
  clearBlock(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataWithBlockInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DataWithBlockInfo
  ): DataWithBlockInfo.AsObject;
  static serializeBinaryToWriter(
    message: DataWithBlockInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DataWithBlockInfo;
  static deserializeBinaryFromReader(
    message: DataWithBlockInfo,
    reader: jspb.BinaryReader
  ): DataWithBlockInfo;
}

export namespace DataWithBlockInfo {
  export type AsObject = {
    postblockdataList: Array<RhoTypes_pb.Par.AsObject>;
    block?: LightBlockInfo.AsObject;
  };
}

export class ContinuationsWithBlockInfo extends jspb.Message {
  getPostblockcontinuationsList(): Array<WaitingContinuationInfo>;
  setPostblockcontinuationsList(value: Array<WaitingContinuationInfo>): void;
  clearPostblockcontinuationsList(): void;
  addPostblockcontinuations(
    value?: WaitingContinuationInfo,
    index?: number
  ): WaitingContinuationInfo;

  getBlock(): LightBlockInfo | undefined;
  setBlock(value?: LightBlockInfo): void;
  hasBlock(): boolean;
  clearBlock(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinuationsWithBlockInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ContinuationsWithBlockInfo
  ): ContinuationsWithBlockInfo.AsObject;
  static serializeBinaryToWriter(
    message: ContinuationsWithBlockInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ContinuationsWithBlockInfo;
  static deserializeBinaryFromReader(
    message: ContinuationsWithBlockInfo,
    reader: jspb.BinaryReader
  ): ContinuationsWithBlockInfo;
}

export namespace ContinuationsWithBlockInfo {
  export type AsObject = {
    postblockcontinuationsList: Array<WaitingContinuationInfo.AsObject>;
    block?: LightBlockInfo.AsObject;
  };
}

export class WaitingContinuationInfo extends jspb.Message {
  getPostblockpatternsList(): Array<RhoTypes_pb.BindPattern>;
  setPostblockpatternsList(value: Array<RhoTypes_pb.BindPattern>): void;
  clearPostblockpatternsList(): void;
  addPostblockpatterns(
    value?: RhoTypes_pb.BindPattern,
    index?: number
  ): RhoTypes_pb.BindPattern;

  getPostblockcontinuation(): RhoTypes_pb.Par | undefined;
  setPostblockcontinuation(value?: RhoTypes_pb.Par): void;
  hasPostblockcontinuation(): boolean;
  clearPostblockcontinuation(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitingContinuationInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: WaitingContinuationInfo
  ): WaitingContinuationInfo.AsObject;
  static serializeBinaryToWriter(
    message: WaitingContinuationInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): WaitingContinuationInfo;
  static deserializeBinaryFromReader(
    message: WaitingContinuationInfo,
    reader: jspb.BinaryReader
  ): WaitingContinuationInfo;
}

export namespace WaitingContinuationInfo {
  export type AsObject = {
    postblockpatternsList: Array<RhoTypes_pb.BindPattern.AsObject>;
    postblockcontinuation?: RhoTypes_pb.Par.AsObject;
  };
}
