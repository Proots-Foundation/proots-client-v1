import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar("popper-arrow-bg")
const tooltip = {
  baseStyle: {
    borderRadius: '8px',
    bg: 'gray.2300',
    color: 'white',
    p: '0.5rem',
    [$arrowBg.variable]: 'gray.2300'
  },
  defaultProps: {
    size: "md",
    variant: "null",
  },
}
export default tooltip