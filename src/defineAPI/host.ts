import { productionHost, productionRNodeHost } from './productionHost'

interface DomainHost {
  host: string
  port: number
  rnodeHost: string
  rnodePort: number
  timeout: number
}

const timeout = 3 * 1000

let domainHost: DomainHost
if (process.env.DEV) {
  domainHost = { host: 'http://localhost', port: 80, rnodeHost: 'http://localhost', rnodePort: 80, timeout: timeout }
} else {
  domainHost = { host: productionHost, port: 80, rnodeHost: productionRNodeHost, rnodePort: 80, timeout: timeout }
}

export default domainHost 