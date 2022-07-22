import { Center, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

function BoxContainer(props) {
  return (
    <Flex w={props.w} h={props.h} justifyContent='center' flexDirection={'column'} p={props.p?props.p:'10'}>
      
      { 
       props.title?
      <Center pb={'1vh'}>
            {props.title}
        </Center>
        
        :
        null}
<Spacer/>
{ 
       props.children?
      <Center>
            {props.children}
        </Center>
        :
        null}

{ 
       props.l?
      props.l.map(item=>
      <Center>
            {item}
        </Center>)
        :
        null}
    

    { 
       props.footer?
      <Center>
            {props.footer}
        </Center>
        :
        null}

    </Flex>
  )
}

export default BoxContainer