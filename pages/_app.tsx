import '../styles/globals.css'
import 'normalize.css/normalize.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import NotificationList from '../components/Notification/Notification'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <NotificationList />
    </ChakraProvider>
  )
}

export default MyApp
