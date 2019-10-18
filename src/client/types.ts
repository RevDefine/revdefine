export interface BlockInfo {
  readonly blockHash: string;
  readonly blockSize: string;
  readonly blockNumber: number;
  readonly version: number;
  readonly deployCount: number;
  readonly tupleSpaceHash: string;
  readonly timestamp: number;
  readonly faultTolerance: number;
  readonly mainParentHash: string;
  readonly parentsHashList: string[];
  readonly sender: string;
  readonly shardId: string;
  readonly bondsValidatorList: string[];
  readonly deployCost: string[];
}

export interface LightBlockInfo {
  readonly blockHash: string;
  readonly blockSize: string;
  readonly blockNumber: number;
  readonly version: number;
  readonly deployCount: number;
  readonly tupleSpaceHash: string;
  readonly timestamp: number;
  readonly faulTolenrance: number;
  readonly mainParentHash: string;
  readonly parentsHashList: string[];
  readonly sender: string;
}
