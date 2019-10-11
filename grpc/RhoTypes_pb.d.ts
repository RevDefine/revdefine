import * as jspb from "google-protobuf"

import * as scalapb_scalapb_pb from './scalapb/scalapb_pb';

export class Par extends jspb.Message {
  getSendsList(): Array<Send>;
  setSendsList(value: Array<Send>): void;
  clearSendsList(): void;
  addSends(value?: Send, index?: number): Send;

  getReceivesList(): Array<Receive>;
  setReceivesList(value: Array<Receive>): void;
  clearReceivesList(): void;
  addReceives(value?: Receive, index?: number): Receive;

  getNewsList(): Array<New>;
  setNewsList(value: Array<New>): void;
  clearNewsList(): void;
  addNews(value?: New, index?: number): New;

  getExprsList(): Array<Expr>;
  setExprsList(value: Array<Expr>): void;
  clearExprsList(): void;
  addExprs(value?: Expr, index?: number): Expr;

  getMatchesList(): Array<Match>;
  setMatchesList(value: Array<Match>): void;
  clearMatchesList(): void;
  addMatches(value?: Match, index?: number): Match;

  getUnforgeablesList(): Array<GUnforgeable>;
  setUnforgeablesList(value: Array<GUnforgeable>): void;
  clearUnforgeablesList(): void;
  addUnforgeables(value?: GUnforgeable, index?: number): GUnforgeable;

  getBundlesList(): Array<Bundle>;
  setBundlesList(value: Array<Bundle>): void;
  clearBundlesList(): void;
  addBundles(value?: Bundle, index?: number): Bundle;

  getConnectivesList(): Array<Connective>;
  setConnectivesList(value: Array<Connective>): void;
  clearConnectivesList(): void;
  addConnectives(value?: Connective, index?: number): Connective;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Par.AsObject;
  static toObject(includeInstance: boolean, msg: Par): Par.AsObject;
  static serializeBinaryToWriter(message: Par, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Par;
  static deserializeBinaryFromReader(message: Par, reader: jspb.BinaryReader): Par;
}

export namespace Par {
  export type AsObject = {
    sendsList: Array<Send.AsObject>,
    receivesList: Array<Receive.AsObject>,
    newsList: Array<New.AsObject>,
    exprsList: Array<Expr.AsObject>,
    matchesList: Array<Match.AsObject>,
    unforgeablesList: Array<GUnforgeable.AsObject>,
    bundlesList: Array<Bundle.AsObject>,
    connectivesList: Array<Connective.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class TaggedContinuation extends jspb.Message {
  getParBody(): ParWithRandom | undefined;
  setParBody(value?: ParWithRandom): void;
  hasParBody(): boolean;
  clearParBody(): void;

  getScalaBodyRef(): number;
  setScalaBodyRef(value: number): void;

  getTaggedContCase(): TaggedContinuation.TaggedContCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaggedContinuation.AsObject;
  static toObject(includeInstance: boolean, msg: TaggedContinuation): TaggedContinuation.AsObject;
  static serializeBinaryToWriter(message: TaggedContinuation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaggedContinuation;
  static deserializeBinaryFromReader(message: TaggedContinuation, reader: jspb.BinaryReader): TaggedContinuation;
}

export namespace TaggedContinuation {
  export type AsObject = {
    parBody?: ParWithRandom.AsObject,
    scalaBodyRef: number,
  }

  export enum TaggedContCase { 
    TAGGED_CONT_NOT_SET = 0,
    PAR_BODY = 1,
    SCALA_BODY_REF = 2,
  }
}

export class ParWithRandom extends jspb.Message {
  getBody(): Par | undefined;
  setBody(value?: Par): void;
  hasBody(): boolean;
  clearBody(): void;

  getRandomstate(): Uint8Array | string;
  getRandomstate_asU8(): Uint8Array;
  getRandomstate_asB64(): string;
  setRandomstate(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParWithRandom.AsObject;
  static toObject(includeInstance: boolean, msg: ParWithRandom): ParWithRandom.AsObject;
  static serializeBinaryToWriter(message: ParWithRandom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParWithRandom;
  static deserializeBinaryFromReader(message: ParWithRandom, reader: jspb.BinaryReader): ParWithRandom;
}

export namespace ParWithRandom {
  export type AsObject = {
    body?: Par.AsObject,
    randomstate: Uint8Array | string,
  }
}

export class PCost extends jspb.Message {
  getCost(): number;
  setCost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PCost.AsObject;
  static toObject(includeInstance: boolean, msg: PCost): PCost.AsObject;
  static serializeBinaryToWriter(message: PCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PCost;
  static deserializeBinaryFromReader(message: PCost, reader: jspb.BinaryReader): PCost;
}

export namespace PCost {
  export type AsObject = {
    cost: number,
  }
}

export class ListParWithRandom extends jspb.Message {
  getParsList(): Array<Par>;
  setParsList(value: Array<Par>): void;
  clearParsList(): void;
  addPars(value?: Par, index?: number): Par;

  getRandomstate(): Uint8Array | string;
  getRandomstate_asU8(): Uint8Array;
  getRandomstate_asB64(): string;
  setRandomstate(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListParWithRandom.AsObject;
  static toObject(includeInstance: boolean, msg: ListParWithRandom): ListParWithRandom.AsObject;
  static serializeBinaryToWriter(message: ListParWithRandom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListParWithRandom;
  static deserializeBinaryFromReader(message: ListParWithRandom, reader: jspb.BinaryReader): ListParWithRandom;
}

export namespace ListParWithRandom {
  export type AsObject = {
    parsList: Array<Par.AsObject>,
    randomstate: Uint8Array | string,
  }
}

export class Var extends jspb.Message {
  getBoundVar(): number;
  setBoundVar(value: number): void;

  getFreeVar(): number;
  setFreeVar(value: number): void;

  getWildcard(): Var.WildcardMsg | undefined;
  setWildcard(value?: Var.WildcardMsg): void;
  hasWildcard(): boolean;
  clearWildcard(): void;

  getVarInstanceCase(): Var.VarInstanceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Var.AsObject;
  static toObject(includeInstance: boolean, msg: Var): Var.AsObject;
  static serializeBinaryToWriter(message: Var, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Var;
  static deserializeBinaryFromReader(message: Var, reader: jspb.BinaryReader): Var;
}

export namespace Var {
  export type AsObject = {
    boundVar: number,
    freeVar: number,
    wildcard?: Var.WildcardMsg.AsObject,
  }

  export class WildcardMsg extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WildcardMsg.AsObject;
    static toObject(includeInstance: boolean, msg: WildcardMsg): WildcardMsg.AsObject;
    static serializeBinaryToWriter(message: WildcardMsg, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WildcardMsg;
    static deserializeBinaryFromReader(message: WildcardMsg, reader: jspb.BinaryReader): WildcardMsg;
  }

  export namespace WildcardMsg {
    export type AsObject = {
    }
  }


  export enum VarInstanceCase { 
    VAR_INSTANCE_NOT_SET = 0,
    BOUND_VAR = 1,
    FREE_VAR = 2,
    WILDCARD = 3,
  }
}

export class Bundle extends jspb.Message {
  getBody(): Par | undefined;
  setBody(value?: Par): void;
  hasBody(): boolean;
  clearBody(): void;

  getWriteflag(): boolean;
  setWriteflag(value: boolean): void;

  getReadflag(): boolean;
  setReadflag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    body?: Par.AsObject,
    writeflag: boolean,
    readflag: boolean,
  }
}

export class Send extends jspb.Message {
  getChan(): Par | undefined;
  setChan(value?: Par): void;
  hasChan(): boolean;
  clearChan(): void;

  getDataList(): Array<Par>;
  setDataList(value: Array<Par>): void;
  clearDataList(): void;
  addData(value?: Par, index?: number): Par;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Send.AsObject;
  static toObject(includeInstance: boolean, msg: Send): Send.AsObject;
  static serializeBinaryToWriter(message: Send, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Send;
  static deserializeBinaryFromReader(message: Send, reader: jspb.BinaryReader): Send;
}

export namespace Send {
  export type AsObject = {
    chan?: Par.AsObject,
    dataList: Array<Par.AsObject>,
    persistent: boolean,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class ReceiveBind extends jspb.Message {
  getPatternsList(): Array<Par>;
  setPatternsList(value: Array<Par>): void;
  clearPatternsList(): void;
  addPatterns(value?: Par, index?: number): Par;

  getSource(): Par | undefined;
  setSource(value?: Par): void;
  hasSource(): boolean;
  clearSource(): void;

  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;
  hasRemainder(): boolean;
  clearRemainder(): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveBind.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveBind): ReceiveBind.AsObject;
  static serializeBinaryToWriter(message: ReceiveBind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveBind;
  static deserializeBinaryFromReader(message: ReceiveBind, reader: jspb.BinaryReader): ReceiveBind;
}

export namespace ReceiveBind {
  export type AsObject = {
    patternsList: Array<Par.AsObject>,
    source?: Par.AsObject,
    remainder?: Var.AsObject,
    freecount: number,
  }
}

export class BindPattern extends jspb.Message {
  getPatternsList(): Array<Par>;
  setPatternsList(value: Array<Par>): void;
  clearPatternsList(): void;
  addPatterns(value?: Par, index?: number): Par;

  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;
  hasRemainder(): boolean;
  clearRemainder(): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindPattern.AsObject;
  static toObject(includeInstance: boolean, msg: BindPattern): BindPattern.AsObject;
  static serializeBinaryToWriter(message: BindPattern, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindPattern;
  static deserializeBinaryFromReader(message: BindPattern, reader: jspb.BinaryReader): BindPattern;
}

export namespace BindPattern {
  export type AsObject = {
    patternsList: Array<Par.AsObject>,
    remainder?: Var.AsObject,
    freecount: number,
  }
}

export class ListBindPatterns extends jspb.Message {
  getPatternsList(): Array<BindPattern>;
  setPatternsList(value: Array<BindPattern>): void;
  clearPatternsList(): void;
  addPatterns(value?: BindPattern, index?: number): BindPattern;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBindPatterns.AsObject;
  static toObject(includeInstance: boolean, msg: ListBindPatterns): ListBindPatterns.AsObject;
  static serializeBinaryToWriter(message: ListBindPatterns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBindPatterns;
  static deserializeBinaryFromReader(message: ListBindPatterns, reader: jspb.BinaryReader): ListBindPatterns;
}

export namespace ListBindPatterns {
  export type AsObject = {
    patternsList: Array<BindPattern.AsObject>,
  }
}

export class Receive extends jspb.Message {
  getBindsList(): Array<ReceiveBind>;
  setBindsList(value: Array<ReceiveBind>): void;
  clearBindsList(): void;
  addBinds(value?: ReceiveBind, index?: number): ReceiveBind;

  getBody(): Par | undefined;
  setBody(value?: Par): void;
  hasBody(): boolean;
  clearBody(): void;

  getPersistent(): boolean;
  setPersistent(value: boolean): void;

  getPeek(): boolean;
  setPeek(value: boolean): void;

  getBindcount(): number;
  setBindcount(value: number): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receive.AsObject;
  static toObject(includeInstance: boolean, msg: Receive): Receive.AsObject;
  static serializeBinaryToWriter(message: Receive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receive;
  static deserializeBinaryFromReader(message: Receive, reader: jspb.BinaryReader): Receive;
}

export namespace Receive {
  export type AsObject = {
    bindsList: Array<ReceiveBind.AsObject>,
    body?: Par.AsObject,
    persistent: boolean,
    peek: boolean,
    bindcount: number,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class New extends jspb.Message {
  getBindcount(): number;
  setBindcount(value: number): void;

  getP(): Par | undefined;
  setP(value?: Par): void;
  hasP(): boolean;
  clearP(): void;

  getUriList(): Array<string>;
  setUriList(value: Array<string>): void;
  clearUriList(): void;
  addUri(value: string, index?: number): void;

  getDeployid(): DeployId | undefined;
  setDeployid(value?: DeployId): void;
  hasDeployid(): boolean;
  clearDeployid(): void;

  getDeployerid(): DeployerId | undefined;
  setDeployerid(value?: DeployerId): void;
  hasDeployerid(): boolean;
  clearDeployerid(): void;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): New.AsObject;
  static toObject(includeInstance: boolean, msg: New): New.AsObject;
  static serializeBinaryToWriter(message: New, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): New;
  static deserializeBinaryFromReader(message: New, reader: jspb.BinaryReader): New;
}

export namespace New {
  export type AsObject = {
    bindcount: number,
    p?: Par.AsObject,
    uriList: Array<string>,
    deployid?: DeployId.AsObject,
    deployerid?: DeployerId.AsObject,
    locallyfree: Uint8Array | string,
  }
}

export class MatchCase extends jspb.Message {
  getPattern(): Par | undefined;
  setPattern(value?: Par): void;
  hasPattern(): boolean;
  clearPattern(): void;

  getSource(): Par | undefined;
  setSource(value?: Par): void;
  hasSource(): boolean;
  clearSource(): void;

  getFreecount(): number;
  setFreecount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchCase.AsObject;
  static toObject(includeInstance: boolean, msg: MatchCase): MatchCase.AsObject;
  static serializeBinaryToWriter(message: MatchCase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchCase;
  static deserializeBinaryFromReader(message: MatchCase, reader: jspb.BinaryReader): MatchCase;
}

export namespace MatchCase {
  export type AsObject = {
    pattern?: Par.AsObject,
    source?: Par.AsObject,
    freecount: number,
  }
}

export class Match extends jspb.Message {
  getTarget(): Par | undefined;
  setTarget(value?: Par): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getCasesList(): Array<MatchCase>;
  setCasesList(value: Array<MatchCase>): void;
  clearCasesList(): void;
  addCases(value?: MatchCase, index?: number): MatchCase;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Match.AsObject;
  static toObject(includeInstance: boolean, msg: Match): Match.AsObject;
  static serializeBinaryToWriter(message: Match, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Match;
  static deserializeBinaryFromReader(message: Match, reader: jspb.BinaryReader): Match;
}

export namespace Match {
  export type AsObject = {
    target?: Par.AsObject,
    casesList: Array<MatchCase.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class Expr extends jspb.Message {
  getGBool(): boolean;
  setGBool(value: boolean): void;

  getGInt(): number;
  setGInt(value: number): void;

  getGString(): string;
  setGString(value: string): void;

  getGUri(): string;
  setGUri(value: string): void;

  getGByteArray(): Uint8Array | string;
  getGByteArray_asU8(): Uint8Array;
  getGByteArray_asB64(): string;
  setGByteArray(value: Uint8Array | string): void;

  getENotBody(): ENot | undefined;
  setENotBody(value?: ENot): void;
  hasENotBody(): boolean;
  clearENotBody(): void;

  getENegBody(): ENeg | undefined;
  setENegBody(value?: ENeg): void;
  hasENegBody(): boolean;
  clearENegBody(): void;

  getEMultBody(): EMult | undefined;
  setEMultBody(value?: EMult): void;
  hasEMultBody(): boolean;
  clearEMultBody(): void;

  getEDivBody(): EDiv | undefined;
  setEDivBody(value?: EDiv): void;
  hasEDivBody(): boolean;
  clearEDivBody(): void;

  getEPlusBody(): EPlus | undefined;
  setEPlusBody(value?: EPlus): void;
  hasEPlusBody(): boolean;
  clearEPlusBody(): void;

  getEMinusBody(): EMinus | undefined;
  setEMinusBody(value?: EMinus): void;
  hasEMinusBody(): boolean;
  clearEMinusBody(): void;

  getELtBody(): ELt | undefined;
  setELtBody(value?: ELt): void;
  hasELtBody(): boolean;
  clearELtBody(): void;

  getELteBody(): ELte | undefined;
  setELteBody(value?: ELte): void;
  hasELteBody(): boolean;
  clearELteBody(): void;

  getEGtBody(): EGt | undefined;
  setEGtBody(value?: EGt): void;
  hasEGtBody(): boolean;
  clearEGtBody(): void;

  getEGteBody(): EGte | undefined;
  setEGteBody(value?: EGte): void;
  hasEGteBody(): boolean;
  clearEGteBody(): void;

  getEEqBody(): EEq | undefined;
  setEEqBody(value?: EEq): void;
  hasEEqBody(): boolean;
  clearEEqBody(): void;

  getENeqBody(): ENeq | undefined;
  setENeqBody(value?: ENeq): void;
  hasENeqBody(): boolean;
  clearENeqBody(): void;

  getEAndBody(): EAnd | undefined;
  setEAndBody(value?: EAnd): void;
  hasEAndBody(): boolean;
  clearEAndBody(): void;

  getEOrBody(): EOr | undefined;
  setEOrBody(value?: EOr): void;
  hasEOrBody(): boolean;
  clearEOrBody(): void;

  getEVarBody(): EVar | undefined;
  setEVarBody(value?: EVar): void;
  hasEVarBody(): boolean;
  clearEVarBody(): void;

  getEListBody(): EList | undefined;
  setEListBody(value?: EList): void;
  hasEListBody(): boolean;
  clearEListBody(): void;

  getETupleBody(): ETuple | undefined;
  setETupleBody(value?: ETuple): void;
  hasETupleBody(): boolean;
  clearETupleBody(): void;

  getESetBody(): ESet | undefined;
  setESetBody(value?: ESet): void;
  hasESetBody(): boolean;
  clearESetBody(): void;

  getEMapBody(): EMap | undefined;
  setEMapBody(value?: EMap): void;
  hasEMapBody(): boolean;
  clearEMapBody(): void;

  getEMethodBody(): EMethod | undefined;
  setEMethodBody(value?: EMethod): void;
  hasEMethodBody(): boolean;
  clearEMethodBody(): void;

  getEMatchesBody(): EMatches | undefined;
  setEMatchesBody(value?: EMatches): void;
  hasEMatchesBody(): boolean;
  clearEMatchesBody(): void;

  getEPercentPercentBody(): EPercentPercent | undefined;
  setEPercentPercentBody(value?: EPercentPercent): void;
  hasEPercentPercentBody(): boolean;
  clearEPercentPercentBody(): void;

  getEPlusPlusBody(): EPlusPlus | undefined;
  setEPlusPlusBody(value?: EPlusPlus): void;
  hasEPlusPlusBody(): boolean;
  clearEPlusPlusBody(): void;

  getEMinusMinusBody(): EMinusMinus | undefined;
  setEMinusMinusBody(value?: EMinusMinus): void;
  hasEMinusMinusBody(): boolean;
  clearEMinusMinusBody(): void;

  getEModBody(): EMod | undefined;
  setEModBody(value?: EMod): void;
  hasEModBody(): boolean;
  clearEModBody(): void;

  getExprInstanceCase(): Expr.ExprInstanceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    gBool: boolean,
    gInt: number,
    gString: string,
    gUri: string,
    gByteArray: Uint8Array | string,
    eNotBody?: ENot.AsObject,
    eNegBody?: ENeg.AsObject,
    eMultBody?: EMult.AsObject,
    eDivBody?: EDiv.AsObject,
    ePlusBody?: EPlus.AsObject,
    eMinusBody?: EMinus.AsObject,
    eLtBody?: ELt.AsObject,
    eLteBody?: ELte.AsObject,
    eGtBody?: EGt.AsObject,
    eGteBody?: EGte.AsObject,
    eEqBody?: EEq.AsObject,
    eNeqBody?: ENeq.AsObject,
    eAndBody?: EAnd.AsObject,
    eOrBody?: EOr.AsObject,
    eVarBody?: EVar.AsObject,
    eListBody?: EList.AsObject,
    eTupleBody?: ETuple.AsObject,
    eSetBody?: ESet.AsObject,
    eMapBody?: EMap.AsObject,
    eMethodBody?: EMethod.AsObject,
    eMatchesBody?: EMatches.AsObject,
    ePercentPercentBody?: EPercentPercent.AsObject,
    ePlusPlusBody?: EPlusPlus.AsObject,
    eMinusMinusBody?: EMinusMinus.AsObject,
    eModBody?: EMod.AsObject,
  }

  export enum ExprInstanceCase { 
    EXPR_INSTANCE_NOT_SET = 0,
    G_BOOL = 1,
    G_INT = 2,
    G_STRING = 3,
    G_URI = 4,
    G_BYTE_ARRAY = 25,
    E_NOT_BODY = 5,
    E_NEG_BODY = 6,
    E_MULT_BODY = 7,
    E_DIV_BODY = 8,
    E_PLUS_BODY = 9,
    E_MINUS_BODY = 10,
    E_LT_BODY = 11,
    E_LTE_BODY = 12,
    E_GT_BODY = 13,
    E_GTE_BODY = 14,
    E_EQ_BODY = 15,
    E_NEQ_BODY = 16,
    E_AND_BODY = 17,
    E_OR_BODY = 18,
    E_VAR_BODY = 19,
    E_LIST_BODY = 20,
    E_TUPLE_BODY = 21,
    E_SET_BODY = 22,
    E_MAP_BODY = 23,
    E_METHOD_BODY = 24,
    E_MATCHES_BODY = 27,
    E_PERCENT_PERCENT_BODY = 28,
    E_PLUS_PLUS_BODY = 29,
    E_MINUS_MINUS_BODY = 30,
    E_MOD_BODY = 31,
  }
}

export class EList extends jspb.Message {
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  clearPsList(): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;
  hasRemainder(): boolean;
  clearRemainder(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EList.AsObject;
  static toObject(includeInstance: boolean, msg: EList): EList.AsObject;
  static serializeBinaryToWriter(message: EList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EList;
  static deserializeBinaryFromReader(message: EList, reader: jspb.BinaryReader): EList;
}

export namespace EList {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class ETuple extends jspb.Message {
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  clearPsList(): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ETuple.AsObject;
  static toObject(includeInstance: boolean, msg: ETuple): ETuple.AsObject;
  static serializeBinaryToWriter(message: ETuple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ETuple;
  static deserializeBinaryFromReader(message: ETuple, reader: jspb.BinaryReader): ETuple;
}

export namespace ETuple {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class ESet extends jspb.Message {
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  clearPsList(): void;
  addPs(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;
  hasRemainder(): boolean;
  clearRemainder(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ESet.AsObject;
  static toObject(includeInstance: boolean, msg: ESet): ESet.AsObject;
  static serializeBinaryToWriter(message: ESet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ESet;
  static deserializeBinaryFromReader(message: ESet, reader: jspb.BinaryReader): ESet;
}

export namespace ESet {
  export type AsObject = {
    psList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class EMap extends jspb.Message {
  getKvsList(): Array<KeyValuePair>;
  setKvsList(value: Array<KeyValuePair>): void;
  clearKvsList(): void;
  addKvs(value?: KeyValuePair, index?: number): KeyValuePair;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  getRemainder(): Var | undefined;
  setRemainder(value?: Var): void;
  hasRemainder(): boolean;
  clearRemainder(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMap.AsObject;
  static toObject(includeInstance: boolean, msg: EMap): EMap.AsObject;
  static serializeBinaryToWriter(message: EMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMap;
  static deserializeBinaryFromReader(message: EMap, reader: jspb.BinaryReader): EMap;
}

export namespace EMap {
  export type AsObject = {
    kvsList: Array<KeyValuePair.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
    remainder?: Var.AsObject,
  }
}

export class EMethod extends jspb.Message {
  getMethodname(): string;
  setMethodname(value: string): void;

  getTarget(): Par | undefined;
  setTarget(value?: Par): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getArgumentsList(): Array<Par>;
  setArgumentsList(value: Array<Par>): void;
  clearArgumentsList(): void;
  addArguments(value?: Par, index?: number): Par;

  getLocallyfree(): Uint8Array | string;
  getLocallyfree_asU8(): Uint8Array;
  getLocallyfree_asB64(): string;
  setLocallyfree(value: Uint8Array | string): void;

  getConnectiveUsed(): boolean;
  setConnectiveUsed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMethod.AsObject;
  static toObject(includeInstance: boolean, msg: EMethod): EMethod.AsObject;
  static serializeBinaryToWriter(message: EMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMethod;
  static deserializeBinaryFromReader(message: EMethod, reader: jspb.BinaryReader): EMethod;
}

export namespace EMethod {
  export type AsObject = {
    methodname: string,
    target?: Par.AsObject,
    argumentsList: Array<Par.AsObject>,
    locallyfree: Uint8Array | string,
    connectiveUsed: boolean,
  }
}

export class KeyValuePair extends jspb.Message {
  getKey(): Par | undefined;
  setKey(value?: Par): void;
  hasKey(): boolean;
  clearKey(): void;

  getValue(): Par | undefined;
  setValue(value?: Par): void;
  hasValue(): boolean;
  clearValue(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValuePair.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValuePair): KeyValuePair.AsObject;
  static serializeBinaryToWriter(message: KeyValuePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValuePair;
  static deserializeBinaryFromReader(message: KeyValuePair, reader: jspb.BinaryReader): KeyValuePair;
}

export namespace KeyValuePair {
  export type AsObject = {
    key?: Par.AsObject,
    value?: Par.AsObject,
  }
}

export class EVar extends jspb.Message {
  getV(): Var | undefined;
  setV(value?: Var): void;
  hasV(): boolean;
  clearV(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EVar.AsObject;
  static toObject(includeInstance: boolean, msg: EVar): EVar.AsObject;
  static serializeBinaryToWriter(message: EVar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EVar;
  static deserializeBinaryFromReader(message: EVar, reader: jspb.BinaryReader): EVar;
}

export namespace EVar {
  export type AsObject = {
    v?: Var.AsObject,
  }
}

export class ENot extends jspb.Message {
  getP(): Par | undefined;
  setP(value?: Par): void;
  hasP(): boolean;
  clearP(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENot.AsObject;
  static toObject(includeInstance: boolean, msg: ENot): ENot.AsObject;
  static serializeBinaryToWriter(message: ENot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENot;
  static deserializeBinaryFromReader(message: ENot, reader: jspb.BinaryReader): ENot;
}

export namespace ENot {
  export type AsObject = {
    p?: Par.AsObject,
  }
}

export class ENeg extends jspb.Message {
  getP(): Par | undefined;
  setP(value?: Par): void;
  hasP(): boolean;
  clearP(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENeg.AsObject;
  static toObject(includeInstance: boolean, msg: ENeg): ENeg.AsObject;
  static serializeBinaryToWriter(message: ENeg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENeg;
  static deserializeBinaryFromReader(message: ENeg, reader: jspb.BinaryReader): ENeg;
}

export namespace ENeg {
  export type AsObject = {
    p?: Par.AsObject,
  }
}

export class EMult extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMult.AsObject;
  static toObject(includeInstance: boolean, msg: EMult): EMult.AsObject;
  static serializeBinaryToWriter(message: EMult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMult;
  static deserializeBinaryFromReader(message: EMult, reader: jspb.BinaryReader): EMult;
}

export namespace EMult {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EDiv extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EDiv.AsObject;
  static toObject(includeInstance: boolean, msg: EDiv): EDiv.AsObject;
  static serializeBinaryToWriter(message: EDiv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EDiv;
  static deserializeBinaryFromReader(message: EDiv, reader: jspb.BinaryReader): EDiv;
}

export namespace EDiv {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMod extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMod.AsObject;
  static toObject(includeInstance: boolean, msg: EMod): EMod.AsObject;
  static serializeBinaryToWriter(message: EMod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMod;
  static deserializeBinaryFromReader(message: EMod, reader: jspb.BinaryReader): EMod;
}

export namespace EMod {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EPlus extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPlus.AsObject;
  static toObject(includeInstance: boolean, msg: EPlus): EPlus.AsObject;
  static serializeBinaryToWriter(message: EPlus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPlus;
  static deserializeBinaryFromReader(message: EPlus, reader: jspb.BinaryReader): EPlus;
}

export namespace EPlus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMinus extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMinus.AsObject;
  static toObject(includeInstance: boolean, msg: EMinus): EMinus.AsObject;
  static serializeBinaryToWriter(message: EMinus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMinus;
  static deserializeBinaryFromReader(message: EMinus, reader: jspb.BinaryReader): EMinus;
}

export namespace EMinus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ELt extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ELt.AsObject;
  static toObject(includeInstance: boolean, msg: ELt): ELt.AsObject;
  static serializeBinaryToWriter(message: ELt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ELt;
  static deserializeBinaryFromReader(message: ELt, reader: jspb.BinaryReader): ELt;
}

export namespace ELt {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ELte extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ELte.AsObject;
  static toObject(includeInstance: boolean, msg: ELte): ELte.AsObject;
  static serializeBinaryToWriter(message: ELte, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ELte;
  static deserializeBinaryFromReader(message: ELte, reader: jspb.BinaryReader): ELte;
}

export namespace ELte {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EGt extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EGt.AsObject;
  static toObject(includeInstance: boolean, msg: EGt): EGt.AsObject;
  static serializeBinaryToWriter(message: EGt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EGt;
  static deserializeBinaryFromReader(message: EGt, reader: jspb.BinaryReader): EGt;
}

export namespace EGt {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EGte extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EGte.AsObject;
  static toObject(includeInstance: boolean, msg: EGte): EGte.AsObject;
  static serializeBinaryToWriter(message: EGte, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EGte;
  static deserializeBinaryFromReader(message: EGte, reader: jspb.BinaryReader): EGte;
}

export namespace EGte {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EEq extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EEq.AsObject;
  static toObject(includeInstance: boolean, msg: EEq): EEq.AsObject;
  static serializeBinaryToWriter(message: EEq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EEq;
  static deserializeBinaryFromReader(message: EEq, reader: jspb.BinaryReader): EEq;
}

export namespace EEq {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class ENeq extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ENeq.AsObject;
  static toObject(includeInstance: boolean, msg: ENeq): ENeq.AsObject;
  static serializeBinaryToWriter(message: ENeq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ENeq;
  static deserializeBinaryFromReader(message: ENeq, reader: jspb.BinaryReader): ENeq;
}

export namespace ENeq {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EAnd extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EAnd.AsObject;
  static toObject(includeInstance: boolean, msg: EAnd): EAnd.AsObject;
  static serializeBinaryToWriter(message: EAnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EAnd;
  static deserializeBinaryFromReader(message: EAnd, reader: jspb.BinaryReader): EAnd;
}

export namespace EAnd {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EOr extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EOr.AsObject;
  static toObject(includeInstance: boolean, msg: EOr): EOr.AsObject;
  static serializeBinaryToWriter(message: EOr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EOr;
  static deserializeBinaryFromReader(message: EOr, reader: jspb.BinaryReader): EOr;
}

export namespace EOr {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMatches extends jspb.Message {
  getTarget(): Par | undefined;
  setTarget(value?: Par): void;
  hasTarget(): boolean;
  clearTarget(): void;

  getPattern(): Par | undefined;
  setPattern(value?: Par): void;
  hasPattern(): boolean;
  clearPattern(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMatches.AsObject;
  static toObject(includeInstance: boolean, msg: EMatches): EMatches.AsObject;
  static serializeBinaryToWriter(message: EMatches, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMatches;
  static deserializeBinaryFromReader(message: EMatches, reader: jspb.BinaryReader): EMatches;
}

export namespace EMatches {
  export type AsObject = {
    target?: Par.AsObject,
    pattern?: Par.AsObject,
  }
}

export class EPercentPercent extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPercentPercent.AsObject;
  static toObject(includeInstance: boolean, msg: EPercentPercent): EPercentPercent.AsObject;
  static serializeBinaryToWriter(message: EPercentPercent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPercentPercent;
  static deserializeBinaryFromReader(message: EPercentPercent, reader: jspb.BinaryReader): EPercentPercent;
}

export namespace EPercentPercent {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EPlusPlus extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EPlusPlus.AsObject;
  static toObject(includeInstance: boolean, msg: EPlusPlus): EPlusPlus.AsObject;
  static serializeBinaryToWriter(message: EPlusPlus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EPlusPlus;
  static deserializeBinaryFromReader(message: EPlusPlus, reader: jspb.BinaryReader): EPlusPlus;
}

export namespace EPlusPlus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class EMinusMinus extends jspb.Message {
  getP1(): Par | undefined;
  setP1(value?: Par): void;
  hasP1(): boolean;
  clearP1(): void;

  getP2(): Par | undefined;
  setP2(value?: Par): void;
  hasP2(): boolean;
  clearP2(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EMinusMinus.AsObject;
  static toObject(includeInstance: boolean, msg: EMinusMinus): EMinusMinus.AsObject;
  static serializeBinaryToWriter(message: EMinusMinus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EMinusMinus;
  static deserializeBinaryFromReader(message: EMinusMinus, reader: jspb.BinaryReader): EMinusMinus;
}

export namespace EMinusMinus {
  export type AsObject = {
    p1?: Par.AsObject,
    p2?: Par.AsObject,
  }
}

export class Connective extends jspb.Message {
  getConnAndBody(): ConnectiveBody | undefined;
  setConnAndBody(value?: ConnectiveBody): void;
  hasConnAndBody(): boolean;
  clearConnAndBody(): void;

  getConnOrBody(): ConnectiveBody | undefined;
  setConnOrBody(value?: ConnectiveBody): void;
  hasConnOrBody(): boolean;
  clearConnOrBody(): void;

  getConnNotBody(): Par | undefined;
  setConnNotBody(value?: Par): void;
  hasConnNotBody(): boolean;
  clearConnNotBody(): void;

  getVarRefBody(): VarRef | undefined;
  setVarRefBody(value?: VarRef): void;
  hasVarRefBody(): boolean;
  clearVarRefBody(): void;

  getConnBool(): boolean;
  setConnBool(value: boolean): void;

  getConnInt(): boolean;
  setConnInt(value: boolean): void;

  getConnString(): boolean;
  setConnString(value: boolean): void;

  getConnUri(): boolean;
  setConnUri(value: boolean): void;

  getConnByteArray(): boolean;
  setConnByteArray(value: boolean): void;

  getConnectiveInstanceCase(): Connective.ConnectiveInstanceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connective.AsObject;
  static toObject(includeInstance: boolean, msg: Connective): Connective.AsObject;
  static serializeBinaryToWriter(message: Connective, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connective;
  static deserializeBinaryFromReader(message: Connective, reader: jspb.BinaryReader): Connective;
}

export namespace Connective {
  export type AsObject = {
    connAndBody?: ConnectiveBody.AsObject,
    connOrBody?: ConnectiveBody.AsObject,
    connNotBody?: Par.AsObject,
    varRefBody?: VarRef.AsObject,
    connBool: boolean,
    connInt: boolean,
    connString: boolean,
    connUri: boolean,
    connByteArray: boolean,
  }

  export enum ConnectiveInstanceCase { 
    CONNECTIVE_INSTANCE_NOT_SET = 0,
    CONN_AND_BODY = 1,
    CONN_OR_BODY = 2,
    CONN_NOT_BODY = 3,
    VAR_REF_BODY = 4,
    CONN_BOOL = 5,
    CONN_INT = 6,
    CONN_STRING = 7,
    CONN_URI = 8,
    CONN_BYTE_ARRAY = 9,
  }
}

export class VarRef extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VarRef.AsObject;
  static toObject(includeInstance: boolean, msg: VarRef): VarRef.AsObject;
  static serializeBinaryToWriter(message: VarRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VarRef;
  static deserializeBinaryFromReader(message: VarRef, reader: jspb.BinaryReader): VarRef;
}

export namespace VarRef {
  export type AsObject = {
    index: number,
    depth: number,
  }
}

export class ConnectiveBody extends jspb.Message {
  getPsList(): Array<Par>;
  setPsList(value: Array<Par>): void;
  clearPsList(): void;
  addPs(value?: Par, index?: number): Par;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectiveBody.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectiveBody): ConnectiveBody.AsObject;
  static serializeBinaryToWriter(message: ConnectiveBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectiveBody;
  static deserializeBinaryFromReader(message: ConnectiveBody, reader: jspb.BinaryReader): ConnectiveBody;
}

export namespace ConnectiveBody {
  export type AsObject = {
    psList: Array<Par.AsObject>,
  }
}

export class DeployId extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployId.AsObject;
  static toObject(includeInstance: boolean, msg: DeployId): DeployId.AsObject;
  static serializeBinaryToWriter(message: DeployId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployId;
  static deserializeBinaryFromReader(message: DeployId, reader: jspb.BinaryReader): DeployId;
}

export namespace DeployId {
  export type AsObject = {
    sig: Uint8Array | string,
  }
}

export class DeployerId extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployerId.AsObject;
  static toObject(includeInstance: boolean, msg: DeployerId): DeployerId.AsObject;
  static serializeBinaryToWriter(message: DeployerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployerId;
  static deserializeBinaryFromReader(message: DeployerId, reader: jspb.BinaryReader): DeployerId;
}

export namespace DeployerId {
  export type AsObject = {
    publickey: Uint8Array | string,
  }
}

export class GUnforgeable extends jspb.Message {
  getGPrivateBody(): GPrivate | undefined;
  setGPrivateBody(value?: GPrivate): void;
  hasGPrivateBody(): boolean;
  clearGPrivateBody(): void;

  getGDeployIdBody(): GDeployId | undefined;
  setGDeployIdBody(value?: GDeployId): void;
  hasGDeployIdBody(): boolean;
  clearGDeployIdBody(): void;

  getGDeployerIdBody(): GDeployerId | undefined;
  setGDeployerIdBody(value?: GDeployerId): void;
  hasGDeployerIdBody(): boolean;
  clearGDeployerIdBody(): void;

  getUnfInstanceCase(): GUnforgeable.UnfInstanceCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GUnforgeable.AsObject;
  static toObject(includeInstance: boolean, msg: GUnforgeable): GUnforgeable.AsObject;
  static serializeBinaryToWriter(message: GUnforgeable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GUnforgeable;
  static deserializeBinaryFromReader(message: GUnforgeable, reader: jspb.BinaryReader): GUnforgeable;
}

export namespace GUnforgeable {
  export type AsObject = {
    gPrivateBody?: GPrivate.AsObject,
    gDeployIdBody?: GDeployId.AsObject,
    gDeployerIdBody?: GDeployerId.AsObject,
  }

  export enum UnfInstanceCase { 
    UNF_INSTANCE_NOT_SET = 0,
    G_PRIVATE_BODY = 1,
    G_DEPLOY_ID_BODY = 2,
    G_DEPLOYER_ID_BODY = 3,
  }
}

export class GPrivate extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPrivate.AsObject;
  static toObject(includeInstance: boolean, msg: GPrivate): GPrivate.AsObject;
  static serializeBinaryToWriter(message: GPrivate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPrivate;
  static deserializeBinaryFromReader(message: GPrivate, reader: jspb.BinaryReader): GPrivate;
}

export namespace GPrivate {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GDeployId extends jspb.Message {
  getSig(): Uint8Array | string;
  getSig_asU8(): Uint8Array;
  getSig_asB64(): string;
  setSig(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GDeployId.AsObject;
  static toObject(includeInstance: boolean, msg: GDeployId): GDeployId.AsObject;
  static serializeBinaryToWriter(message: GDeployId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GDeployId;
  static deserializeBinaryFromReader(message: GDeployId, reader: jspb.BinaryReader): GDeployId;
}

export namespace GDeployId {
  export type AsObject = {
    sig: Uint8Array | string,
  }
}

export class GDeployerId extends jspb.Message {
  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GDeployerId.AsObject;
  static toObject(includeInstance: boolean, msg: GDeployerId): GDeployerId.AsObject;
  static serializeBinaryToWriter(message: GDeployerId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GDeployerId;
  static deserializeBinaryFromReader(message: GDeployerId, reader: jspb.BinaryReader): GDeployerId;
}

export namespace GDeployerId {
  export type AsObject = {
    publickey: Uint8Array | string,
  }
}

