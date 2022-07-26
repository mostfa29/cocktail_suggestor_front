import { Button, ButtonGroup, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

//there is 2 type of products sallabale products and cocktails
//sallable prop to add add to cart and buy now logic 

function Product(props) {
  return (
      <Container>
      {/* Title */}
      <TitleContainer>{props.title} </TitleContainer>
      </Container>
  )
}

export default Product

const Container = styled.div`

`

const TitleContainer = styled.div`

`
