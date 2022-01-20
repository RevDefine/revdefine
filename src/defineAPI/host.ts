import { productionHost, productionRNodePort } from './productionHost'

interface DomainHost {
  rnodeHost: string
  rnodePort: number
  timeout: number
}

const timeout = 3 * 1000

const domainHost: DomainHost= {  rnodeHost: productionHost, rnodePort: productionRNodePort, timeout: timeout }


export default domainHost 