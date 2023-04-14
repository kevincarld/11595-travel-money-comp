export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: 'none!important',
    _focus: {
      ring: '0px'
    },
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    cta: {
      bg: 'primary',
      fontFamily: 'prelo',
      color: 'white',
      fontSize: {base: '20px', d: '25px'},
      lineHeight: {base: '30px', d:'37px'},
      fontWeight: 'bold',
      height: 'auto',
      pt: '8px',
      pb: '8px',
      pl: '60px',
      pr: '60px',
      borderRadius: '4px',
      textTransform: 'uppercase',

      _hover: {
        opacity: '.86',

        '&:disabled': {
          background: 'primary',
          opacity: '.4',
        }

      }
    }
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    variant: 'cta'
  },
}