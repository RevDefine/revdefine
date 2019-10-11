import * as jspb from 'google-protobuf';

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';
import * as RhoTypes_pb from './RhoTypes_pb';

export class HasBlockRequestProto extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasBlockRequestProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: HasBlockRequestProto
  ): HasBlockRequestProto.AsObject;
  static serializeBinaryToWriter(
    message: HasBlockRequestProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): HasBlockRequestProto;
  static deserializeBinaryFromReader(
    message: HasBlockRequestProto,
    reader: jspb.BinaryReader
  ): HasBlockRequestProto;
}

export namespace HasBlockRequestProto {
  export type AsObject = {
    hash: Uint8Array | string;
  };
}

export class HasBlockProto extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HasBlockProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: HasBlockProto
  ): HasBlockProto.AsObject;
  static serializeBinaryToWriter(
    message: HasBlockProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): HasBlockProto;
  static deserializeBinaryFromReader(
    message: HasBlockProto,
    reader: jspb.BinaryReader
  ): HasBlockProto;
}

export namespace HasBlockProto {
  export type AsObject = {
    hash: Uint8Array | string;
  };
}

export class BlockRequestProto extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRequestProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockRequestProto
  ): BlockRequestProto.AsObject;
  static serializeBinaryToWriter(
    message: BlockRequestProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockRequestProto;
  static deserializeBinaryFromReader(
    message: BlockRequestProto,
    reader: jspb.BinaryReader
  ): BlockRequestProto;
}

export namespace BlockRequestProto {
  export type AsObject = {
    hash: Uint8Array | string;
  };
}

export class ForkChoiceTipRequestProto extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForkChoiceTipRequestProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ForkChoiceTipRequestProto
  ): ForkChoiceTipRequestProto.AsObject;
  static serializeBinaryToWriter(
    message: ForkChoiceTipRequestProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ForkChoiceTipRequestProto;
  static deserializeBinaryFromReader(
    message: ForkChoiceTipRequestProto,
    reader: jspb.BinaryReader
  ): ForkChoiceTipRequestProto;
}

export namespace ForkChoiceTipRequestProto {
  export type AsObject = {};
}

export class ApprovedBlockCandidateProto extends jspb.Message {
  getBlock(): BlockMessageProto | undefined;
  setBlock(value?: BlockMessageProto): void;
  hasBlock(): boolean;
  clearBlock(): void;

  getRequiredsigs(): number;
  setRequiredsigs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlockCandidateProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ApprovedBlockCandidateProto
  ): ApprovedBlockCandidateProto.AsObject;
  static serializeBinaryToWriter(
    message: ApprovedBlockCandidateProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlockCandidateProto;
  static deserializeBinaryFromReader(
    message: ApprovedBlockCandidateProto,
    reader: jspb.BinaryReader
  ): ApprovedBlockCandidateProto;
}

export namespace ApprovedBlockCandidateProto {
  export type AsObject = {
    block?: BlockMessageProto.AsObject;
    requiredsigs: number;
  };
}

export class UnapprovedBlockProto extends jspb.Message {
  getCandidate(): ApprovedBlockCandidateProto | undefined;
  setCandidate(value?: ApprovedBlockCandidateProto): void;
  hasCandidate(): boolean;
  clearCandidate(): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnapprovedBlockProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UnapprovedBlockProto
  ): UnapprovedBlockProto.AsObject;
  static serializeBinaryToWriter(
    message: UnapprovedBlockProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UnapprovedBlockProto;
  static deserializeBinaryFromReader(
    message: UnapprovedBlockProto,
    reader: jspb.BinaryReader
  ): UnapprovedBlockProto;
}

export namespace UnapprovedBlockProto {
  export type AsObject = {
    candidate?: ApprovedBlockCandidateProto.AsObject;
    timestamp: number;
    duration: number;
  };
}

export class Signature extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  getAlgorithm(): string;
  setAlgorithm(value: string): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static serializeBinaryToWriter(
    message: Signature,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(
    message: Signature,
    reader: jspb.BinaryReader
  ): Signature;
}

export namespace Signature {
  export type AsObject = {
    publickey: Uint8Array | string;
    algorithm: string;
    sig: Uint8Array | string;
  };
}

export class BlockApprovalProto extends jspb.Message {
  getCandidate(): ApprovedBlockCandidateProto | undefined;
  setCandidate(value?: ApprovedBlockCandidateProto): void;
  hasCandidate(): boolean;
  clearCandidate(): void;

  getSig(): Signature | undefined;
  setSig(value?: Signature): void;
  hasSig(): boolean;
  clearSig(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockApprovalProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockApprovalProto
  ): BlockApprovalProto.AsObject;
  static serializeBinaryToWriter(
    message: BlockApprovalProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockApprovalProto;
  static deserializeBinaryFromReader(
    message: BlockApprovalProto,
    reader: jspb.BinaryReader
  ): BlockApprovalProto;
}

export namespace BlockApprovalProto {
  export type AsObject = {
    candidate?: ApprovedBlockCandidateProto.AsObject;
    sig?: Signature.AsObject;
  };
}

export class ApprovedBlockProto extends jspb.Message {
  getCandidate(): ApprovedBlockCandidateProto | undefined;
  setCandidate(value?: ApprovedBlockCandidateProto): void;
  hasCandidate(): boolean;
  clearCandidate(): void;

  getSigsList(): Array<Signature>;
  setSigsList(value: Array<Signature>): void;
  clearSigsList(): void;
  addSigs(value?: Signature, index?: number): Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlockProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ApprovedBlockProto
  ): ApprovedBlockProto.AsObject;
  static serializeBinaryToWriter(
    message: ApprovedBlockProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlockProto;
  static deserializeBinaryFromReader(
    message: ApprovedBlockProto,
    reader: jspb.BinaryReader
  ): ApprovedBlockProto;
}

export namespace ApprovedBlockProto {
  export type AsObject = {
    candidate?: ApprovedBlockCandidateProto.AsObject;
    sigsList: Array<Signature.AsObject>;
  };
}

export class ApprovedBlockRequestProto extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovedBlockRequestProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ApprovedBlockRequestProto
  ): ApprovedBlockRequestProto.AsObject;
  static serializeBinaryToWriter(
    message: ApprovedBlockRequestProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ApprovedBlockRequestProto;
  static deserializeBinaryFromReader(
    message: ApprovedBlockRequestProto,
    reader: jspb.BinaryReader
  ): ApprovedBlockRequestProto;
}

export namespace ApprovedBlockRequestProto {
  export type AsObject = {
    identifier: string;
  };
}

export class NoApprovedBlockAvailableProto extends jspb.Message {
  getIdentifier(): string;
  setIdentifier(value: string): void;

  getNodeidentifer(): string;
  setNodeidentifer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoApprovedBlockAvailableProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: NoApprovedBlockAvailableProto
  ): NoApprovedBlockAvailableProto.AsObject;
  static serializeBinaryToWriter(
    message: NoApprovedBlockAvailableProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): NoApprovedBlockAvailableProto;
  static deserializeBinaryFromReader(
    message: NoApprovedBlockAvailableProto,
    reader: jspb.BinaryReader
  ): NoApprovedBlockAvailableProto;
}

export namespace NoApprovedBlockAvailableProto {
  export type AsObject = {
    identifier: string;
    nodeidentifer: string;
  };
}

export class BlockMessageProto extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  getHeader(): HeaderProto | undefined;
  setHeader(value?: HeaderProto): void;
  hasHeader(): boolean;
  clearHeader(): void;

  getBody(): BodyProto | undefined;
  setBody(value?: BodyProto): void;
  hasBody(): boolean;
  clearBody(): void;

  getJustificationsList(): Array<JustificationProto>;
  setJustificationsList(value: Array<JustificationProto>): void;
  clearJustificationsList(): void;
  addJustifications(
    value?: JustificationProto,
    index?: number
  ): JustificationProto;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): void;

  getSeqnum(): number;
  setSeqnum(value: number): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getSigalgorithm(): string;
  setSigalgorithm(value: string): void;

  getShardid(): string;
  setShardid(value: string): void;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMessageProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockMessageProto
  ): BlockMessageProto.AsObject;
  static serializeBinaryToWriter(
    message: BlockMessageProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockMessageProto;
  static deserializeBinaryFromReader(
    message: BlockMessageProto,
    reader: jspb.BinaryReader
  ): BlockMessageProto;
}

export namespace BlockMessageProto {
  export type AsObject = {
    blockhash: Uint8Array | string;
    header?: HeaderProto.AsObject;
    body?: BodyProto.AsObject;
    justificationsList: Array<JustificationProto.AsObject>;
    sender: Uint8Array | string;
    seqnum: number;
    sig: Uint8Array | string;
    sigalgorithm: string;
    shardid: string;
    extrabytes: Uint8Array | string;
  };
}

export class BlockHashMessageProto extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHashMessageProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockHashMessageProto
  ): BlockHashMessageProto.AsObject;
  static serializeBinaryToWriter(
    message: BlockHashMessageProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockHashMessageProto;
  static deserializeBinaryFromReader(
    message: BlockHashMessageProto,
    reader: jspb.BinaryReader
  ): BlockHashMessageProto;
}

export namespace BlockHashMessageProto {
  export type AsObject = {
    hash: Uint8Array | string;
  };
}

export class BlockMetadataInternal extends jspb.Message {
  getBlockhash(): Uint8Array | string;
  getBlockhash_asU8(): Uint8Array;
  getBlockhash_asB64(): string;
  setBlockhash(value: Uint8Array | string): void;

  getParentsList(): Array<Uint8Array | string>;
  setParentsList(value: Array<Uint8Array | string>): void;
  clearParentsList(): void;
  addParents(value: Uint8Array | string, index?: number): void;

  getSender(): Uint8Array | string;
  getSender_asU8(): Uint8Array;
  getSender_asB64(): string;
  setSender(value: Uint8Array | string): void;

  getJustificationsList(): Array<JustificationProto>;
  setJustificationsList(value: Array<JustificationProto>): void;
  clearJustificationsList(): void;
  addJustifications(
    value?: JustificationProto,
    index?: number
  ): JustificationProto;

  getBondsList(): Array<BondProto>;
  setBondsList(value: Array<BondProto>): void;
  clearBondsList(): void;
  addBonds(value?: BondProto, index?: number): BondProto;

  getBlocknum(): number;
  setBlocknum(value: number): void;

  getSeqnum(): number;
  setSeqnum(value: number): void;

  getInvalid(): boolean;
  setInvalid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockMetadataInternal.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: BlockMetadataInternal
  ): BlockMetadataInternal.AsObject;
  static serializeBinaryToWriter(
    message: BlockMetadataInternal,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BlockMetadataInternal;
  static deserializeBinaryFromReader(
    message: BlockMetadataInternal,
    reader: jspb.BinaryReader
  ): BlockMetadataInternal;
}

export namespace BlockMetadataInternal {
  export type AsObject = {
    blockhash: Uint8Array | string;
    parentsList: Array<Uint8Array | string>;
    sender: Uint8Array | string;
    justificationsList: Array<JustificationProto.AsObject>;
    bondsList: Array<BondProto.AsObject>;
    blocknum: number;
    seqnum: number;
    invalid: boolean;
  };
}

export class HeaderProto extends jspb.Message {
  getParentshashlistList(): Array<Uint8Array | string>;
  setParentshashlistList(value: Array<Uint8Array | string>): void;
  clearParentshashlistList(): void;
  addParentshashlist(value: Uint8Array | string, index?: number): void;

  getDeployshash(): Uint8Array | string;
  getDeployshash_asU8(): Uint8Array;
  getDeployshash_asB64(): string;
  setDeployshash(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDeploycount(): number;
  setDeploycount(value: number): void;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: HeaderProto
  ): HeaderProto.AsObject;
  static serializeBinaryToWriter(
    message: HeaderProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): HeaderProto;
  static deserializeBinaryFromReader(
    message: HeaderProto,
    reader: jspb.BinaryReader
  ): HeaderProto;
}

export namespace HeaderProto {
  export type AsObject = {
    parentshashlistList: Array<Uint8Array | string>;
    deployshash: Uint8Array | string;
    timestamp: number;
    version: number;
    deploycount: number;
    extrabytes: Uint8Array | string;
  };
}

export class DeployDataProto extends jspb.Message {
  getDeployer(): Uint8Array | string;
  getDeployer_asU8(): Uint8Array;
  getDeployer_asB64(): string;
  setDeployer(value: Uint8Array | string): void;

  getTerm(): string;
  setTerm(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  getSigalgorithm(): string;
  setSigalgorithm(value: string): void;

  getPhloprice(): number;
  setPhloprice(value: number): void;

  getPhlolimit(): number;
  setPhlolimit(value: number): void;

  getValidafterblocknumber(): number;
  setValidafterblocknumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployDataProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeployDataProto
  ): DeployDataProto.AsObject;
  static serializeBinaryToWriter(
    message: DeployDataProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeployDataProto;
  static deserializeBinaryFromReader(
    message: DeployDataProto,
    reader: jspb.BinaryReader
  ): DeployDataProto;
}

export namespace DeployDataProto {
  export type AsObject = {
    deployer: Uint8Array | string;
    term: string;
    timestamp: number;
    sig: Uint8Array | string;
    sigalgorithm: string;
    phloprice: number;
    phlolimit: number;
    validafterblocknumber: number;
  };
}

export class ProcessedDeployProto extends jspb.Message {
  getDeploy(): DeployDataProto | undefined;
  setDeploy(value?: DeployDataProto): void;
  hasDeploy(): boolean;
  clearDeploy(): void;

  getCost(): RhoTypes_pb.PCost | undefined;
  setCost(value?: RhoTypes_pb.PCost): void;
  hasCost(): boolean;
  clearCost(): void;

  getDeploylogList(): Array<EventProto>;
  setDeploylogList(value: Array<EventProto>): void;
  clearDeploylogList(): void;
  addDeploylog(value?: EventProto, index?: number): EventProto;

  getPaymentlogList(): Array<EventProto>;
  setPaymentlogList(value: Array<EventProto>): void;
  clearPaymentlogList(): void;
  addPaymentlog(value?: EventProto, index?: number): EventProto;

  getErrored(): boolean;
  setErrored(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessedDeployProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ProcessedDeployProto
  ): ProcessedDeployProto.AsObject;
  static serializeBinaryToWriter(
    message: ProcessedDeployProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ProcessedDeployProto;
  static deserializeBinaryFromReader(
    message: ProcessedDeployProto,
    reader: jspb.BinaryReader
  ): ProcessedDeployProto;
}

export namespace ProcessedDeployProto {
  export type AsObject = {
    deploy?: DeployDataProto.AsObject;
    cost?: RhoTypes_pb.PCost.AsObject;
    deploylogList: Array<EventProto.AsObject>;
    paymentlogList: Array<EventProto.AsObject>;
    errored: boolean;
  };
}

export class BodyProto extends jspb.Message {
  getState(): RChainStateProto | undefined;
  setState(value?: RChainStateProto): void;
  hasState(): boolean;
  clearState(): void;

  getDeploysList(): Array<ProcessedDeployProto>;
  setDeploysList(value: Array<ProcessedDeployProto>): void;
  clearDeploysList(): void;
  addDeploys(
    value?: ProcessedDeployProto,
    index?: number
  ): ProcessedDeployProto;

  getExtrabytes(): Uint8Array | string;
  getExtrabytes_asU8(): Uint8Array;
  getExtrabytes_asB64(): string;
  setExtrabytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyProto.AsObject;
  static toObject(includeInstance: boolean, msg: BodyProto): BodyProto.AsObject;
  static serializeBinaryToWriter(
    message: BodyProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BodyProto;
  static deserializeBinaryFromReader(
    message: BodyProto,
    reader: jspb.BinaryReader
  ): BodyProto;
}

export namespace BodyProto {
  export type AsObject = {
    state?: RChainStateProto.AsObject;
    deploysList: Array<ProcessedDeployProto.AsObject>;
    extrabytes: Uint8Array | string;
  };
}

export class JustificationProto extends jspb.Message {
  getValidator(): Uint8Array | string;
  getValidator_asU8(): Uint8Array;
  getValidator_asB64(): string;
  setValidator(value: Uint8Array | string): void;

  getLatestblockhash(): Uint8Array | string;
  getLatestblockhash_asU8(): Uint8Array;
  getLatestblockhash_asB64(): string;
  setLatestblockhash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JustificationProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: JustificationProto
  ): JustificationProto.AsObject;
  static serializeBinaryToWriter(
    message: JustificationProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): JustificationProto;
  static deserializeBinaryFromReader(
    message: JustificationProto,
    reader: jspb.BinaryReader
  ): JustificationProto;
}

export namespace JustificationProto {
  export type AsObject = {
    validator: Uint8Array | string;
    latestblockhash: Uint8Array | string;
  };
}

export class RChainStateProto extends jspb.Message {
  getPrestatehash(): Uint8Array | string;
  getPrestatehash_asU8(): Uint8Array;
  getPrestatehash_asB64(): string;
  setPrestatehash(value: Uint8Array | string): void;

  getPoststatehash(): Uint8Array | string;
  getPoststatehash_asU8(): Uint8Array;
  getPoststatehash_asB64(): string;
  setPoststatehash(value: Uint8Array | string): void;

  getBondsList(): Array<BondProto>;
  setBondsList(value: Array<BondProto>): void;
  clearBondsList(): void;
  addBonds(value?: BondProto, index?: number): BondProto;

  getBlocknumber(): number;
  setBlocknumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RChainStateProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RChainStateProto
  ): RChainStateProto.AsObject;
  static serializeBinaryToWriter(
    message: RChainStateProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RChainStateProto;
  static deserializeBinaryFromReader(
    message: RChainStateProto,
    reader: jspb.BinaryReader
  ): RChainStateProto;
}

export namespace RChainStateProto {
  export type AsObject = {
    prestatehash: Uint8Array | string;
    poststatehash: Uint8Array | string;
    bondsList: Array<BondProto.AsObject>;
    blocknumber: number;
  };
}

export class EventProto extends jspb.Message {
  getProduce(): ProduceEventProto | undefined;
  setProduce(value?: ProduceEventProto): void;
  hasProduce(): boolean;
  clearProduce(): void;

  getConsume(): ConsumeEventProto | undefined;
  setConsume(value?: ConsumeEventProto): void;
  hasConsume(): boolean;
  clearConsume(): void;

  getComm(): CommEventProto | undefined;
  setComm(value?: CommEventProto): void;
  hasComm(): boolean;
  clearComm(): void;

  getEventInstanceCase(): EventProto.EventInstanceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EventProto
  ): EventProto.AsObject;
  static serializeBinaryToWriter(
    message: EventProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EventProto;
  static deserializeBinaryFromReader(
    message: EventProto,
    reader: jspb.BinaryReader
  ): EventProto;
}

export namespace EventProto {
  export type AsObject = {
    produce?: ProduceEventProto.AsObject;
    consume?: ConsumeEventProto.AsObject;
    comm?: CommEventProto.AsObject;
  };

  export enum EventInstanceCase {
    EVENT_INSTANCE_NOT_SET = 0,
    PRODUCE = 1,
    CONSUME = 2,
    COMM = 3
  }
}

export class ProduceEventProto extends jspb.Message {
  getChannelshash(): Uint8Array | string;
  getChannelshash_asU8(): Uint8Array;
  getChannelshash_asB64(): string;
  setChannelshash(value: Uint8Array | string): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getTimesrepeated(): number;
  setTimesrepeated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProduceEventProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ProduceEventProto
  ): ProduceEventProto.AsObject;
  static serializeBinaryToWriter(
    message: ProduceEventProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ProduceEventProto;
  static deserializeBinaryFromReader(
    message: ProduceEventProto,
    reader: jspb.BinaryReader
  ): ProduceEventProto;
}

export namespace ProduceEventProto {
  export type AsObject = {
    channelshash: Uint8Array | string;
    hash: Uint8Array | string;
    persistent: boolean;
    timesrepeated: number;
  };
}

export class ConsumeEventProto extends jspb.Message {
  getChannelshashesList(): Array<Uint8Array | string>;
  setChannelshashesList(value: Array<Uint8Array | string>): void;
  clearChannelshashesList(): void;
  addChannelshashes(value: Uint8Array | string, index?: number): void;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsumeEventProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ConsumeEventProto
  ): ConsumeEventProto.AsObject;
  static serializeBinaryToWriter(
    message: ConsumeEventProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ConsumeEventProto;
  static deserializeBinaryFromReader(
    message: ConsumeEventProto,
    reader: jspb.BinaryReader
  ): ConsumeEventProto;
}

export namespace ConsumeEventProto {
  export type AsObject = {
    channelshashesList: Array<Uint8Array | string>;
    hash: Uint8Array | string;
    persistent: boolean;
  };
}

export class CommEventProto extends jspb.Message {
  getConsume(): ConsumeEventProto | undefined;
  setConsume(value?: ConsumeEventProto): void;
  hasConsume(): boolean;
  clearConsume(): void;

  getProducesList(): Array<ProduceEventProto>;
  setProducesList(value: Array<ProduceEventProto>): void;
  clearProducesList(): void;
  addProduces(value?: ProduceEventProto, index?: number): ProduceEventProto;

  getPeeksList(): Array<PeekProto>;
  setPeeksList(value: Array<PeekProto>): void;
  clearPeeksList(): void;
  addPeeks(value?: PeekProto, index?: number): PeekProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommEventProto.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CommEventProto
  ): CommEventProto.AsObject;
  static serializeBinaryToWriter(
    message: CommEventProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CommEventProto;
  static deserializeBinaryFromReader(
    message: CommEventProto,
    reader: jspb.BinaryReader
  ): CommEventProto;
}

export namespace CommEventProto {
  export type AsObject = {
    consume?: ConsumeEventProto.AsObject;
    producesList: Array<ProduceEventProto.AsObject>;
    peeksList: Array<PeekProto.AsObject>;
  };
}

export class PeekProto extends jspb.Message {
  getChannelindex(): number;
  setChannelindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeekProto.AsObject;
  static toObject(includeInstance: boolean, msg: PeekProto): PeekProto.AsObject;
  static serializeBinaryToWriter(
    message: PeekProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PeekProto;
  static deserializeBinaryFromReader(
    message: PeekProto,
    reader: jspb.BinaryReader
  ): PeekProto;
}

export namespace PeekProto {
  export type AsObject = {
    channelindex: number;
  };
}

export class BondProto extends jspb.Message {
  getValidator(): Uint8Array | string;
  getValidator_asU8(): Uint8Array;
  getValidator_asB64(): string;
  setValidator(value: Uint8Array | string): void;

  getStake(): number;
  setStake(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondProto.AsObject;
  static toObject(includeInstance: boolean, msg: BondProto): BondProto.AsObject;
  static serializeBinaryToWriter(
    message: BondProto,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): BondProto;
  static deserializeBinaryFromReader(
    message: BondProto,
    reader: jspb.BinaryReader
  ): BondProto;
}

export namespace BondProto {
  export type AsObject = {
    validator: Uint8Array | string;
    stake: number;
  };
}
