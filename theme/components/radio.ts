const _switch = {
  baseStyle: {
    control: {
      bg: 'none',
      borderColor: 'gray.700',
      _focus: {
        boxShadow: 'none'
      },
      _checked: {
        bg: 'none',
        borderColor: 'gray.700',
        _hover: {
          borderColor: 'gray.700',
          bg: 'none'
        },
        _before: {
          bg: "gray.700",
        },
        _disabled: {
          bg: 'none',
          borderColor: 'gray.700',
          _hover: {
            borderColor: 'gray.700',
            bg: 'none'
          },
          _before: {
            bg: "gray.700",
          },
        },
      },
      _disabled: {
        bg: 'none',
        borderColor: 'gray.700',
        _hover: {
          borderColor: 'gray.700',
          bg: 'none'
        },
        _before: {
          bg: "gray.700",
        },
      },
    }
  },
  variants: {
    primary: {
      control: {
        bg: 'none',
        borderColor: 'primary.500',
        _focus: {
          boxShadow: 'none'
        },
        _checked: {
          bg: 'none',
          borderColor: 'primary.500',
          _hover: {
            borderColor: 'primary.500',
            bg: 'none'
          },
          _before: {
            bg: "primary.500",
          },
        },
      }
    },
  },
  defaultProps: {
    size: "md",
    variant: "null",
  },
}
export default _switch 