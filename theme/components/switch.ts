const _switch = {
  baseStyle: {

    track: {
      bg: "gray.500",
      _disabled: {
        opacity: 1,
        bg: "primary.200"
      },
      _focus: {
        boxShadow: "none",
      },
      _checked: {
        bg: "primary.500",
      }
    },
    thumb: {
      bg: 'white'
    }
  },
  defaultProps: {
    size: "md",
    variant: "null",
  },
}
export default _switch 