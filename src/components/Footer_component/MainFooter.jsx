import { Center, useColorMode } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import BoxContainer from '../BoxContainer_component/BoxContainer'

function MainFooter(props) {

  return (
    <Container minH='20vh' backgroundColor={props.color} >
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

    </Container>
  )
}

export default MainFooter

const Container = styled.div`
display: flex;
background-color: ${props => props.backgroundColor};
/* @media only screen and (max-width: 600px) {
  justify-content: center;
  flex-direction: column;
} */
`