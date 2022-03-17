import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#f9f8fa'
      }
    }
  },
  shadows: {
    indicatorShadowGood: '0 0 8px #44c553',
    indicatorShadowAverage: '0 0 8px #ffb200',
    indicatorShadowBad: '0 0 8px #ff4535'
  }
})

export default theme