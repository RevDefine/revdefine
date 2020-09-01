import { DeployInfo } from './rnodeTypes'

enum TransactionType {
  genesis = 'genesis',
  transfer = 'transfer',
  deploy = 'deploy'
}

export interface OldTransactionResponse {
  fromAddr: string
  toAddr: string
  amount: number
  retUnforeable: string
  deploy: DeployInfo
  success: boolean
  reason: string
}

export interface Transaction {
  fromAddr: string
  toAddr: string
  amount: number
  transactionType: TransactionType
  blockHash: string
  blockNumber: number
  deployId: string
  timestamp: number
  isFinalized: boolean
  isSucceeded: boolean
  reason: string
}

export interface TransactionsResponse {
  transactions: Transaction[]
}

export interface RankRevAccount {
  address: string
  balance: number
  isGenesisVault: boolean
  lastOperationBlock: string
  rank: number
}

export interface RevAccountResponse {
  account: RankRevAccount
}

export interface RevAccountListResponse {
  accounts: RankRevAccount[]
}

export interface RangeData {
  start: number
  end: number
  data: number
}

export interface RangeDataResponse {
  datas: RangeData[]
}


export interface AccountTopStatData {
  top10: number
  top50: number
  top100: number
  total: number
  destroy: number
  destroyAddr: string

  totalAccount: number
  last24hActiveAccountAmount: number
  last7dActiveAccountAmount: number
  last1mActiveAccountAmount: number
}

export interface AccountTopStatDataResponse {
  data: AccountTopStatData
}
