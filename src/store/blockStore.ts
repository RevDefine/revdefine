import { LightBlockInfo } from '../client/types';
export class BlockStore {
  public blockMap: { [blockHash: string]: LightBlockInfo };
  public blockArray: LightBlockInfo[];
  public maxLength: number;
  public constructor(maxLength: number = 200) {
    this.blockMap = {};
    this.blockArray = [];
    this.maxLength = maxLength;
  }

  public addBlock(blockInfo: LightBlockInfo) {
    if (this.containBlock(blockInfo.blockHash)) {
      return;
    } else {
      if (this.blockArray.length >= this.maxLength) {
        const deleteBlock = this.blockArray.pop() as LightBlockInfo;
        delete this.blockMap[deleteBlock.blockHash];
      }
      this.blockArray.unshift(blockInfo);
      this.blockMap[blockInfo.blockHash] = blockInfo;
    }
  }

  public sortBlocks() {
    this.blockArray = this.blockArray.sort((a, b) => b.blockNumber - a.blockNumber);
  }

  public containBlock(blockHash: string) {
    return blockHash in this.blockMap;
  }

  public clearStore() {
    this.blockArray = [];
    this.blockMap = {};
  }
}
