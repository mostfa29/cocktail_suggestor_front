import React from 'react'
import styled from 'styled-components'
import ProductDetailed from './ProductDetailed'
import logo from '../../assets/Logo.png';

function ProductList() {
  return (
    <Container>
      <ProductDetailed
        title={'hawaiien wiskhey'}
        description={'this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well'}
        rating={5}
        image={logo}
      />

            <ProductDetailed
        title={'hawaiien wiskhey'}
        description={'this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well'}
        rating={5}
        image={logo}
      />

            <ProductDetailed
        title={'hawaiien wiskhey'}
        description={'this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well'}
        rating={5}
        image={logo}
      />

            <ProductDetailed
        title={'hawaiien wiskhey'}
        description={'this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well.this is a long description to make sure the componet works very well'}
        rating={5}
        image={logo}
      />
    </Container>
  )
}

export default ProductList

const Container = styled.div`
padding: 15px;
`