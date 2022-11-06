import { Flex, Text } from '@chakra-ui/react'
import useContextMenu from '../../hooks/useContextMenu'

type ContextMenuProps = {
  onOpen: () => void
  setEditType: (type: string) => void
  selected: any
}
const ContextMenu = ({ onOpen, setEditType, selected }: ContextMenuProps) => {
  const { anchorPoint, show } = useContextMenu()

  const checkEditType = (selected: any) => {
    if (selected.start === selected.end) {
      return 'insert'
    }

    if (selected.name.length > 0) {
      return 'rename'
    }

    return 'replace'
  }

  const mainEditType = checkEditType(selected)

  if (show) {
    return (
      <Flex
        position="absolute"
        bg="rgba(255, 255, 255, 0.6)"
        border="0.5px solid rgba(0, 0, 0, 0.12)"
        boxShadow="0px 0px 20px rgba(0, 0, 0, 0.15)"
        borderRadius="6px"
        backdropFilter="blur(30px)"
        py="10px"
        minH="100px"
        width="195px"
        flexDir="column"
        transition="opacity 0.5s linear"
        opacity="1"
        style={{ top: anchorPoint.y, left: anchorPoint.x }}
      >
        <Flex
          pl="12px"
          mb="0.2rem"
          h="16px"
          align="center"
          color="#202124"
          _hover={{
            bg: '#3E92F8',
            color: '#FFFFFF',
          }}
          cursor="pointer"
          onClick={() => {
            setEditType(mainEditType)
            onOpen()
          }}
        >
          <Text textTransform="capitalize" fontSize="0.8rem">
            {mainEditType}
          </Text>
        </Flex>
        {mainEditType === 'replace' && (
          <Flex
            pl="12px"
            mb="0.2rem"
            h="16px"
            w="195px"
            align="center"
            color="#202124"
            _hover={{
              bg: '#3E92F8',
              color: '#FFFFFF',
            }}
            cursor="pointer"
            onClick={() => {
              setEditType('annotation')
              onOpen()
            }}
          >
            <Text fontSize="0.8rem">Add Annotation</Text>
          </Flex>
        )}
        {mainEditType === 'rename' && (
          <Flex
            pl="12px"
            mb="0.2rem"
            h="16px"
            w="195px"
            align="center"
            color="#202124"
            _hover={{
              bg: '#3E92F8',
              color: '#FFFFFF',
            }}
            cursor="pointer"
            onClick={() => {
              setEditType('delete')
              onOpen()
            }}
          >
            <Text fontSize="0.8rem">Delete</Text>
          </Flex>
        )}
        {mainEditType !== 'insert' && false && (
          <Flex
            pl="12px"
            mb="0.2rem"
            h="16px"
            w="195px"
            align="center"
            color="#202124"
            _hover={{
              bg: '#3E92F8',
              color: '#FFFFFF',
            }}
            cursor="pointer"
            onClick={() => {
              setEditType('search')
              onOpen()
            }}
          >
            <Text fontSize="0.8rem">Search</Text>
          </Flex>
        )}
      </Flex>
    )
  }
  return <></>
}

export default ContextMenu
