import { useRef } from 'react'

import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Flex, useDisclosure, Icon, Text } from '@chakra-ui/react'

type TopBarProps = {
  setFiles: (e: Event) => void
}

const TopBar = ({ setFiles }: TopBarProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const uploadRef = useRef<HTMLInputElement | null>(null)

  return (
    <Box zIndex="99" position="relative" h="3rem" w="100%">
      <Flex
        h="100%"
        w="100%"
        position="relative"
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          position="relative"
          height="100%"
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Flex position="relative" width={['100%', '8%']} height="100%">
            <Text
              cursor="pointer"
              fontSize="2rem"
              fontWeight="bold"
              color="primary.800"
            >
              pRoots
            </Text>
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 2, md: 0 }}
          align="center"
          justify={'flex-end'}
          direction={'row'}
        >
          <Icon
            w={8}
            h={8}
            color="primary.800"
            as={PlusSquareIcon}
            onClick={() => {
              if (uploadRef.current) {
                uploadRef.current.click()
              }
            }}
          />
          <input
            ref={uploadRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              // @ts-ignore
              setFiles(e, 'a')
              if (uploadRef.current?.value) {
                uploadRef.current.value = ''
              }
            }}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default TopBar
