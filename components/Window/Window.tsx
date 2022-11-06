import { Flex, Input, Text, Box, Button } from '@chakra-ui/react'

import {
  insertAt,
  checkBetween,
  replace,
  checkIntersect,
} from '../../functions/utils'

import { AnnotationProp } from '../../types/genomic'
import ContextMenu from '../ContextMenu'

type WindowProps = {
  show: boolean
  selected: any
  onClose: () => void
  content: string
  setContent: (content: string) => void
  editType: string
  seq: string
  setSeq: (seq: string) => void
  annotations: AnnotationProp[]
  setAnnotations: (annotations: AnnotationProp[]) => void
}

const Window = ({
  editType,
  selected,
  show,
  onClose,
  content,
  setContent,
  seq,
  setSeq,
  annotations,
  setAnnotations,
}: WindowProps) => {
  const edit = () => {
    const contentLength = content.length
    const start = selected.clockwise ? selected.start : selected.end
    const end = selected.clockwise ? selected.end : selected.start

    if (editType === 'insert') {
      const newAnnotation = annotations.find((a) => {
        return checkBetween(start, a.start, end)
      })
      if (newAnnotation) {
        const newAnnotations = annotations.filter(
          (a) => a.name !== newAnnotation.name,
        )
        setAnnotations([
          ...newAnnotations,
          {
            ...newAnnotation,
            end: newAnnotation.end + contentLength,
          },
        ])
      }

      setSeq(insertAt(seq, content, selected.start))
    } else if (editType === 'replace') {
      const newSeq = {
        start,
        end: start + contentLength,
      }

      const newAnnotations = annotations.map((a) => {
        const addtionLength = end - start - contentLength
        if (a.end > newSeq.end) {
          return {
            ...a,
            end: a.end + addtionLength,
          }
        }
        return a
      })

      setSeq(replace(seq, content, start, end))
      setAnnotations(newAnnotations)
    } else if (editType === 'rename') {
      const selectedAnnotation = annotations.find(
        (a) => a.name === selected.name,
      )
      if (selectedAnnotation) {
        const newAnnotation = {
          ...selectedAnnotation,
          name: content,
        }
        const newAnnotations = annotations.filter(
          (a) => a.name !== selectedAnnotation.name,
        )

        setAnnotations([...newAnnotations, newAnnotation])
      }
    } else if (editType === 'annotation') {
      const newAnnotation = {
        color: undefined,
        direction: selected.clockwise ? 1 : -1,
        end: selected.end,
        name: content,
        start: selected.start,
        type: 'gene',
      }
      setAnnotations([...annotations, newAnnotation])
    } else if (editType === 'delete') {
      const selectedAnnotation = annotations.find(
        (a) => a.name === selected.name,
      )
      if (selectedAnnotation) {
        const newAnnotations = annotations.filter(
          (a) => a.name !== selectedAnnotation.name,
        )

        setAnnotations([...newAnnotations])
      }
    }

    setContent('')
  }

  return (
    <Flex
      bg="#FAFAFA"
      display={show ? 'flex' : 'none'}
      flexDir="column"
      p="16px"
      borderRadius="11px"
      position="absolute"
      top="40%"
      left="50%"
      transform="translate(-50%,-50%)"
      boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
      align="left"
      justify="center"
    >
      <Flex justify="left" align="center" mb="0.5rem">
        <Box
          w="12px"
          h="12px"
          borderRadius="50%"
          border="1px solid #CF544D"
          cursor="pointer"
          bg="#FF5D5B"
          onClick={() => onClose()}
        />
        <Text textTransform="capitalize" ml="1rem" color="black">
          {editType}
        </Text>
      </Flex>
      {editType !== 'delete' && (
        <Input
          w="250px"
          p="6px 7px"
          color="black"
          border="1px solid rgba(0, 0, 0, 0.05)"
          borderColor="rgba(0, 0, 0, 0.05)"
          borderRadius="6px"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          _hover={{
            border: '3.5px solid rgba(58, 108, 217, 0.5)',
          }}
          _active={{
            color: 'black',
          }}
          _focus={{
            color: 'black',
          }}
        />
      )}
      <Button
        mt="1rem"
        w="84px"
        h="25px"
        color="#3D3D3D"
        fontSize="14px"
        fontWeight="normal"
        border="0.5px solid rgba(0, 0, 0, 0.12)"
        borderRadius="6px"
        boxShadow="0px 0.5px 1px rgba(0, 0, 0, 0.1);"
        onClick={() => {
          edit()
          onClose()
        }}
      >
        Enter
      </Button>
    </Flex>
  )
}

export default Window
