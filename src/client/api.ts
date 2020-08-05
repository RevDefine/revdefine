import Client from './deployService';
import { ExprInt } from './types'

const CHECKBALANCECONTRACT = `new return, rl(\`rho:registry:lookup\`), RevVaultCh, vaultCh, balanceCh in {
rl!(\`rho:rchain:revVault\`, * RevVaultCh) |
  for (@(_, RevVault)<- RevVaultCh) {
  @RevVault!("findOrCreate", "$addr", * vaultCh) |
    for (@(true, vault)<- vaultCh) {
    @vault!("balance", * balanceCh) |
      for (@balance<- balanceCh) {
      return !(balance)
    }
  }
}
}`

export default class RChainApi {
  public client?: Client
  public constructor(client: Client) {
    this.client = client
  }
  public changeClient (client: Client) {
    this.client = client
  }

  public async checkBalance (address: string): Promise<number> {
    const contract = CHECKBALANCECONTRACT.replace('$addr', address)
    const data = await this.client?.exploratoryDeploy(contract)
    // @ts-ignore
    const exprData = data?.expr[0].ExprInt as ExprInt
    return exprData.data
  }


}