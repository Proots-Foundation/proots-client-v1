const modal = {
  baseStyle: {
    dialogContainer: {
      backdropFilter: 'blur(10px)'
    },
    dialog: {
      bg: 'gray.2400',
      p: "2.5rem 1.5rem",
      borderRadius: "1rem"
    },
    header: {
      fontSize: ['1rem', '1.5rem'],
      fontWeight: '300',
      textAlign: 'center'
    },
    body: {
      color: 'white',
    },
    closeButton: {
      bg: 'none',
      color: 'white',
      _focus: {
        bg: 'none',
        outline: 'none'
      }
    }
  }
}

export default modal