import { Button, Flex, Text } from '@chakra-ui/react'
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Goerli,
} from '@usedapp/core'
import { abbreviateAddress } from '../../functions/utils'

const WalletConnect = () => {
  const { account, activateBrowserWallet, deactivate, chainId } = useEthers()
  return (
    <Flex align="center">
      {account && (
        <Text color="primary.800" ml="0.5rem">
          {abbreviateAddress(account)}(Goerli Testnet)
        </Text>
      )}
      {!account && (
        <Button
          ml="0.5rem"
          borderRadius="6px"
          size="sm"
          bg="primary.800"
          color="white"
          _hover={{
            bg: 'primary.600',
          }}
          onClick={() => activateBrowserWallet()}
        >
          Connect
        </Button>
      )}
      {account && (
        <Button
          ml="0.5rem"
          borderRadius="6px"
          size="sm"
          bg="primary.800"
          color="white"
          _hover={{
            bg: 'primary.600',
          }}
          onClick={deactivate}
        >
          Disconnect
        </Button>
      )}
    </Flex>
  )
}

export default WalletConnect
