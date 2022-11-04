import type { NextPage } from 'next'
import { useEffect, useState, useRef } from 'react'
import { Flex, Text, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import SeqViz from 'seqviz'
import useFileUpload from 'react-use-file-upload'
import seqparse from 'seqparse'

import TopBar from '../components/TopBar'
import { AnnotationProp } from '../types/genomic'

const App: NextPage = () => {
  const renderCheckerId = useRef<number | null>(null)
  const [name, setName] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [zoom, setZoom] = useState<number>(50)
  const [seq, setSeq] = useState<string>('')
  const [selected, setSelected] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [annotations, setAnnotations] = useState<AnnotationProp[]>([])
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload()

  const renderChecker = () => {
    const seqviz = document.getElementsByClassName('la-vz-seqviz')
    if (seqviz.length > 0 && renderCheckerId.current) {
      window.clearInterval(renderCheckerId.current)
      renderCheckerId.current = null
      setIsLoading(false)
    }
  }

  const parseData = async (file: string | ArrayBuffer | null | undefined) => {
    if (typeof file === 'string') {
      const { name, type, seq, annotations } = await seqparse(file)
      console.log({ name, type, seq, annotations })
      setName(name)
      setSeq(seq)
      setAnnotations(annotations)
    }
  }

  const readFile = async (files: File[]) => {
    const fileReader = new FileReader()
    fileReader.readAsText(files[0], 'UTF-8')
    fileReader.onload = (e) => {
      const content = e.target
      parseData(content?.result)
    }
  }

  useEffect(() => {
    if (files.length > 0) {
      if (!renderCheckerId.current) {
        setIsLoading(true)
        renderCheckerId.current = window.setInterval(() => {
          renderChecker()
        }, 500)
      }
      readFile(files)
    }
  }, [files])

  return (
    <Flex flexDir="column" w="100%" h="100vh">
      <Head>
        <title>pRootps</title>
        <meta
          name="description"
          content="pRoots is a tool we build with web3 technology for people to store, share and learn genomic information and grow into a sharable genomic knowledge network"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justify="center" direction="column" h="100%">
        <TopBar setFiles={setFiles} />
        <Flex w="100%" h="calc(100% - 3rem)" align="center" justify="center">
          {isLoading && (
            <Flex
              position="absolute"
              top="40%"
              left="50%"
              transform="translate(-50%,-50%)"
              align="center"
              justify="center"
            >
              <Text
                fontSize="2xl"
                color="primary.800"
                onClick={() => console.log(renderCheckerId)}
                mr="0.5rem"
              >
                Loading
              </Text>
              <Spinner color="primary.800" />
            </Flex>
          )}
          {seq.length > 0 && (
            <SeqViz
              name={name}
              showComplement={false}
              seq={seq}
              viewer="both_flip"
              annotations={annotations}
              onSelection={(selected) => {
                setSelected(selected)
                console.log(selected)
              }}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
