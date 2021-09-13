export interface DeployInfo {
  deploy: Deploy
  cost: number;
  isFailed: boolean;
  systemDeployError: string
  //eventLogs: 
}

export interface Deploy{
  deployer: string
  sig: string
  sigAlgorithm: string
  term: string
  timestamp: number
  phloPrice: number
  phloLimit: number
  validAfterBlockNumber: number
}

export interface BlockInfo {
  header: BlockHeader;
  body: BlockBody;
}

export interface BondInfo {
  validator: string;
  stake: number;
}

export interface JustificationInfo {
  validator: string;
  latestBlockHash: string;
}

export interface BlockBody{
  deploys: DeployInfo[];
  extraBytes: string;
  // rejectedDeploys
  // systemDeploys
}

export interface BlockHeader {
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
  readonly parents: string[];

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
  readonly justifications: JustificationInfo[]
}

export interface ExploratoryDeployResponse {
  expr: RhoExpr[]
  block: BlockHeader
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