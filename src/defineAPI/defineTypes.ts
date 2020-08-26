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

export interface RevAccount {
  address: string
  balance: number
  isGenesisVault: boolean
  lastOperationBlock: string
}

export interface RevAccountResponse {
  account: RevAccount
}

export interface RevAccountListResponse {
  accounts: RevAccount[]
}

export interface RangeData {
  start: number
  end: number
  data: number
}

export interface RangeDataResponse{
  datas: RangeData[]
}