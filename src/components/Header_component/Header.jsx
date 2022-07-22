import React from 'react'
import { Box, Container, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import ToogleColorMode from '../ToogleColorMode_component/ToogleColorMode'
import Logo from './Logo'
import AccountHeaderItem from './AccountHeaderItem'
function Header() {
  const {colorMode,toggleColorMode}=useColorMode()
  return (
    
    <Container style={{color:'white'}}  p={'2vh'}  maxW='100%' bg={colorMode === 'light'? 'colors.header_light':'colors.header_dark'} >
    <Flex >
    <Box w='70px' h='10'  >
       <ToogleColorMode/>
    </Box>

    <Spacer />

    <Box w='170px' h='10' textAlign='center' style={{display:'flex',justifyContent:'center'}}>
       <Logo/>
    </Box>

    <Spacer />

    <Box w='180px' h='10'  >
       <AccountHeaderItem/>
    </Box>

    </Flex>
  </Container>
  )
}

export default Header