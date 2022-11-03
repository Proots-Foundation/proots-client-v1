const button = {
  baseStyle: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    _focus: {
      outline: 0,
      boxShadow: 'none'
    },

  },
  sizes: {
    lg: {
      borderRadius: '12px',
      padding: '1rem',
      fontSize: ['0.875rem', '1rem']
    },
    md: {
      borderRadius: '8px',
      padding: '0.75rem 1rem 0.75rem 1rem',
      fontSize: ['0.875rem', '1rem']
    },
    sm: {
      borderRadius: '8px',
      padding: '0.5rem 1rem 0.5rem 1rem',
      fontSize: ['0.5rem', '0.875rem']
    }
  },
  variants: {
    bright: {
      bg: 'primary.500',
      color: 'black',
      _hover: {
        bg: 'primary.600',
        color: 'black',
        _disabled: {
          _loading: {
            opacity: 1,
            bg: 'primary.600',
          }
        }
      },
      _disabled: {
        bg: 'gray.2300',
        color: 'gray.1800',

      },
    },
    dark: {
      bg: 'gray.2300',
      color: 'primary.500',
      _hover: {
        bg: 'gray.2200',
        color: 'primary.500'
      },
      _disabled: {
        bg: 'gray.2300',
        color: 'gray.1800'
      }
    },
    gray: {
      bg: 'gray.2200',
      color: 'primary.500',
      _hover: {
        bg: 'gray.2200',
        color: 'primary.600'
      },
      _disabled: {
        bg: 'gray.2200',
        color: 'gray.1800'
      }
    },
    ghost: {
      color: 'primary.300',
      border: '1px solid',
      borderColor: 'primary.300',
      bg: 'none',
      _hover: {
        borderColor: 'primary.400',
        color: 'primary.400',
        bg: 'none',
      },
      _disabled: {
        borderColor: 'gray.1800',
        color: 'gray.1800',
        bg: 'none',
      },
      _active: {
        bg: 'none',
      }
    },
    'link-button': {
      bg: 'gray.2200',
      color: 'blue.500',
      textDecoration: 'underline',
      _hover: {
        bg: 'gray.2200',
        color: 'blue.600'
      },
      _disabled: {
        bg: 'gray.2200',
        color: 'gray.1800'
      }
    }
  }
}

export default button