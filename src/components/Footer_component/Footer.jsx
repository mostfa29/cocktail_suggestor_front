import { Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import MainFooter from './MainFooter'
import SubFooter from './SubFooter'

//2 main components
  //1- MainFooter which contains all the footer data
    //contains 3 BoxContainer Components
       //* props: title - p(paragraph type body) - props.children(list type body) - footer 

  //2- SubFooter which contains right reserved and website name

  //TODO setup react router dom and add link fonctionnalities to the box component

function Footer() {
    const {colorMode,toggleColorMode}= useColorMode()
  return (
    <Flex
      flexDirection='column'
      style={{
        position:'relative',
        height:'auto',
      }}
    >
       <MainFooter color={colorMode === 'light'? '#4F4BA5':'#1C436C'} />
       
       <SubFooter/>

{/* <SocialMediaList    h='30' icons={
      
      [ <SunIcon w='30' h='30' />,
      <SunIcon w='30' h='30'/>
     ]
      
   } /> */}
    </Flex>
  )
}

export default Footer