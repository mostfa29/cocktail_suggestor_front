import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import Search from '../../Search_component/Search'


function SubHeader() {
    const {colorMode}=useColorMode()
  return (
      <Container colorMode={colorMode}>
      <Search/>
      </Container>
  )
}

export default SubHeader

const Container = styled.div`

padding: 15px;
max-width: 100vw;
display: flex;
justify-content: center;
background-color: rgba(0,0,0,${props=>props.colorMode === "light"? '0.1':'0.4'});

`