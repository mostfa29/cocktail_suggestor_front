
import { extendTheme } from '@chakra-ui/react'


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


const colors={
  'header_light':"#1C436C",
  'header_dark':"#4F4BA5"
}

const customTheme = extendTheme({colors:{colors}, config })

export default customTheme