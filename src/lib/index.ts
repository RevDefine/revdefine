const RevUnit = 100000000

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