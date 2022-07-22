import { Center } from '@chakra-ui/react'
import React from 'react'
import BoxContainer from '../BoxContainer_component/BoxContainer'

function MainFooter(props) {
  return (
    <Center minH='20vh' backgroundColor={props.color} justifyContent='start'>
        <BoxContainer title='test' w='40vw' h='100%'>
          ttttttttttttttttttttttttttt
          ttttttttttttttttttttttttttttt
          ttttttttttttttttttttttttttttttt
        </BoxContainer>
        <BoxContainer title='test2' w='20vw'
        l={[
          'elem1',
          'elem2',
          'elem3',
          'elem4',
        ]}/>
        <BoxContainer title='test3' w='20vw' 
          l={[
            'elem1',
            'elem2',
            'elem3',
            'elem4',
          ]}/>
        <BoxContainer title='test4' w='20vw'
          l={[
            'elem1',
            'elem2',
            'elem3',
            'elem4',
          ]}/>

    </Center>
  )
}

export default MainFooter