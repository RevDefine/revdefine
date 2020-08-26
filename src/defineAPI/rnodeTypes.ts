export interface DeployInfo {
  deployer: string;
  term: string;
  timestamp: number;
  sig: string;
  sigAlgorithm: string;
  phloPrice: number;
  phloLimit: number;
  validAfterBlockNumber: number;
  cost: number;
  errored: boolean;
  systemDeployError: string;
}
export interface BlockInfo {
  blockInfo: LightBlockInfo;
  deploys: DeployInfo[];
}

export interface BondInfo {
  validator: string;
  stake: number;
}

export interface LightBlockInfo {
  readonly blockHash: string;
  readonly sender: string;
  readonly seqNum: number;
  readonly sig: string;
  readonly sigAlgorithm: string;
  readonly shardId: string;
  readonly extraBytes: string;

  // HeaderProto message
  readonly version: number;
  readonly timestamp: number;
  readonly headerExtraBytes: string;
  readonly parentsHashList: string[];

  // BodyProto message
  readonly blockNumber: number;
  readonly preStateHash: string;
  readonly postStateHash: string;
  readonly bodyExtraBytes: string;
  readonly bonds: BondInfo[];

  // extra
  readonly blockSize: string;
  readonly deployCount: number;
  readonly faultTolerance: number;
}

export interface ExploratoryDeployResponse {
  expr: RhoExpr[]
  block: LightBlockInfo
}

export interface IsFinalizedResponse {
  isFinalized: boolean
}


export type RhoExpr = ExprMap | ExprBool | ExprInt | ExprString | ExprUri | ExprBytes | ExprUnforg | ExprPar | ExprList | ExprTuple
export type RhoUnforg = UnforgDeploy | UnforgDeployer | UnforgPrivate

export interface ExprMap {
  data: Map<string, RhoExpr>
}

export interface ExprBool {
  data: boolean
}

export interface ExprInt {
  data: number
}

export interface ExprString {
  data: string
}

export interface ExprUri {
  data: string
}

export interface ExprBytes {
  data: string
}

export interface ExprUnforg {
  data: RhoUnforg
}

export interface ExprPar {
  data: RhoExpr[]
}

export interface ExprList {
  data: RhoExpr[]
}

export interface ExprTuple {
  data: RhoExpr[]
}

export interface UnforgPrivate {
  data: string
}

export interface UnforgDeploy {
  data: string
}

export interface UnforgDeployer {
  data: string
}