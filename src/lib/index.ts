const RevUnit = 100000000

import { verifyRevAddr } from './rnode-address'

export function timeStampToDateTime (timestamp: string) {
  return new Date(timestamp)
}

export function timeStampToShortTime (timestamp: string): string {
  const dateObj = timeStampToDateTime(timestamp)
  return dateObj.toUTCString()
}

export function revUnit (nanoRev: number) {
  return nanoRev / RevUnit
}

export const StringType = {
  revAddress: 1,
  ethAddress: 2,
  blockHash: 3,
  deployId: 4,
  blockNumber: 5,
  Nothing: 0
}

function verifyEthAddress (address: string): boolean {
  const normalizedAddr = address.toLowerCase();
  if (!/^(0x)?[0-9a-f]{40}$/i.test(normalizedAddr)) {
    // check if it has the basic requirements of an address
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(normalizedAddr) || /^(0x)?[0-9A-F]{40}$/.test(normalizedAddr)) {
    // If it's all small caps or all all caps, return true
    return true;
  } else {
    // Otherwise check each case
    return false;
    //
    // return isChecksumAddress(address);
  }
}
function verifyBlockHash (blockHash: string): boolean {
  if (blockHash.length == 64) {
    return true
  } else {
    return false
  }
}

function verifyDeployId (deployId: string): boolean {
  if (deployId.length > 120) {
    return true
  } else {
    return false
  }
}

export function judgeSearchString (target: string) {
  try {
    const isRevAddr = verifyRevAddr(target)
    if (isRevAddr) {
      return StringType.revAddress
    } else if (verifyEthAddress(target)) {
      return StringType.ethAddress
    } else if (verifyBlockHash(target)) {
      return StringType.blockHash
    } else if (verifyDeployId(target)) {
      return StringType.deployId
    } else if (!isNaN(Number(target))) {
      return StringType.blockNumber
    } else {
      return StringType.Nothing
    }
  } catch {
    if (verifyEthAddress(target)) {
      return StringType.ethAddress
    } else if (verifyBlockHash(target)) {
      return StringType.blockHash
    } else if (verifyDeployId(target)) {
      return StringType.deployId
    } else if (!isNaN(Number(target))) {
      return StringType.blockNumber
    } else {
      return StringType.Nothing
    }
  }

}