import { useRef, useState, useEffect } from 'react'
import { NFTStorage, File } from 'nft.storage'
import { filesFromPath } from 'files-from-path'
import { PlusSquareIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Flex, useDisclosure, Icon, Text, Spinner } from '@chakra-ui/react'
import { useEthers, useContractFunction } from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { v4 as uuidv4 } from 'uuid'

import { parseSeqMetadata, parseAnntationMetadata } from '../../functions/mint'

import WalletConnect from '../WalletConnect'
import { AnnotationProp } from '../../types/genomic'

import { ImageCID, contractABI } from '../../constants'
import Image from '../../public/proots.jpg'

type TopBarProps = {
  files: File[]
  name: string
  annotations: AnnotationProp[]
  seq: string
  setFiles: (e: Event) => void
}

const TopBar = ({ setFiles, name, annotations, seq, files }: TopBarProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const uploadRef = useRef<HTMLInputElement | null>(null)

  const client = new NFTStorage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVhMUE0MjBDODRDYzMyNzc1YjAyN2U4OTE2MTlFYWQ4RDkyRTk3ODQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2Njc4MzIwODY4MywibmFtZSI6InBSb290cyJ9.CtPQgMV1KGYwZWo8DADUoJ0Pb5E_r-3izVqS9EUAxU0',
  })
  const { account } = useEthers()
  const contractInterface = new utils.Interface(contractABI)
  const contractAddress = '0xe64154515166F86ce77c47B35dE3E6F0cCe4cBb5'
  const contract = new Contract(contractAddress, contractInterface)
  const { state, send } = useContractFunction(contract, 'safeMint', {
    gasLimitBufferPercentage: 10,
  })

  const share = async () => {
    if (account) {
      setLoading(true)
      const image = await fetch(Image.src)
      console.log(image)
      const imgBlob = await image.blob()
      console.log(imgBlob)
      const version = uuidv4()
      const seqMetadata = parseSeqMetadata(version, account, name, seq, imgBlob)
      console.log(seqMetadata)
      const metadata = await client.store(seqMetadata)
      console.log(metadata)

      await send(account, metadata.url)
      for (let a in annotations) {
        const version = uuidv4()
        const annotationMetadata = parseAnntationMetadata(
          version,
          account,
          annotations[a].name,
          annotations[a].start,
          annotations[a].end,
          imgBlob,
        )
        const metadata = await client.store(annotationMetadata)
        await send(account, metadata.url)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log(state)
  }, [state])
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
        {files.length > 0 && account && (
          <Flex
            align="center"
            cursor="pointer"
            onClick={() => {
              if (!loading) {
                share()
              }
            }}
          >
            <Text fontWeight="semibold" color="primary.800">
              Share the World
            </Text>
            {loading ? (
              <Spinner ml="0.25rem" color="primary.800" w={5} h={5} />
            ) : (
              <Icon
                ml="0.25rem"
                w={5}
                h={5}
                color="primary.800"
                as={ArrowUpIcon}
              />
            )}
          </Flex>
        )}
        {!loading && (
          <Flex
            flex={{ base: 2, md: 0 }}
            align="center"
            justify={'flex-end'}
            direction={'row'}
            ml="0.5rem"
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
        )}
        <WalletConnect />
      </Flex>
    </Box>
  )
}

export default TopBar
