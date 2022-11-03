const input = {
  baseStyle: {

    field: {
      background: 'transparent',
      border: '1px solid',
      borderColor: 'gray.2300',
      color: 'white',
      _focus: {
        borderColor: 'white',
        color: 'white'
      },
      _hover: {
        borderColor: 'white',
        color: 'white'
      },
      _placeholder: {
        color: 'gray.1200'
      }
    },
  },
  sizes: {
    sm: {
      field: {
        borderRadius: "8px",
        fontSize: ["0.5rem", "0.875rem"],
        padding: "0.8rem 0.81rem",
      },
    },
    md: {
      field: {
        borderRadius: "8px",
        fontSize: ["0.5rem", "0.875rem"],
        padding: "0.88rem 0.875rem",
      },
    },
  },
  variants: {
    error: {
      field: {
        borderColor: "red.500",
        _focus: {
          borderColor: 'red.500',
          color: 'white'
        },
        _hover: {
          borderColor: 'red.500',
          color: 'white'
        }
      },
    },
    bright: {
      field: {
        borderColor: 'gray.2100',
      }
    }
  },
  defaultProps: {
    size: "md",
    variant: "null",
  },
}
export default input