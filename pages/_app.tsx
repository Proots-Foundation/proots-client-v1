import '../styles/globals.css'
import 'normalize.css/normalize.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Goerli,
} from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import NotificationList from '../components/Notification/Notification'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  const config: Config = {
    readOnlyChainId: Goerli.chainId,
    readOnlyUrls: {
      [Goerli.chainId]: getDefaultProvider('goerli'),
    },
  }
  return (
    <ChakraProvider theme={theme}>
      <DAppProvider config={config}>
        <Component {...pageProps} />
        <NotificationList />
      </DAppProvider>
    </ChakraProvider>
  )
}

export default MyApp
