import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import ProductBox from '../ProductBox_component/ProductBox'

function Products(props) {
  const {colorMode}=useColorMode() 
  return (
      <Container colorMode={colorMode}>
          <ProductBox m={'10px 0 10px 0' } />
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0'} />
          
            <ProductBox m={'10px 0 10px 0' } />
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>  <ProductBox m={'10px 0 10px 0' } />
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>  <ProductBox m={'10px 0 10px 0' } />
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>  <ProductBox m={'10px 0 10px 0' } />
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
          <ProductBox m={'10px 0 10px 0' }/>
      </Container>
  )
}

export default Products

const Container = styled.div`
background-color:rgba( ${props => props.colorMode === 'light' ? '0,0,0,0.1' : '0,0,0,0.4'});
width: 98%;
margin: 30px auto;
padding: 30px;
display: flex;
gap: 10%;
justify-content: space-between;
flex-wrap: wrap;
`