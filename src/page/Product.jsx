import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/ProducPage_component/ProductList'

function Product() {
  return (
    <Container>
      <ProductList/>
    </Container>
     
    
  )
}

export default Product

const Container = styled.div`
min-height: 100vw;
`