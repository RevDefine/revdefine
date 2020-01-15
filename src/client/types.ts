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
