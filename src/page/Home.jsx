import React from 'react'
import styled from 'styled-components'
import Products from '../components/Products_component/Products'
import ScrollX from '../components/ScrollXBox_component/ScrollX'



function Home() {
  return (
    <Container>
      <ScrollX />
      <Products/>
    </Container>
  )
}

export default Home

const Container = styled.div`
min-height: 100vw;
`