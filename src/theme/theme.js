
import { extendTheme } from '@chakra-ui/react'


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


const colors={
  'body':"#f2f0fc",
  'header_dark':"#1C436C",
  'header_light':"#4F4BA5",
  'footer_dark':"#1C436C",
  'footer_light':"#4F4BA5",
  
}

const customTheme = extendTheme({colors:{colors}, config })

export default customTheme