import React from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup, Image, Text, useColorMode } from '@chakra-ui/react'
import Rating from '../Rating_component/Rating'
import dotExtraContent from '../../common/paragraph_truncate'


function ProductDetailed(props) {
    const {colorMode}=useColorMode()
  return (
      <Container colorMode={colorMode}>
          <LeftBox>
              
              <ImageBox>
                <Image  w='60' src={props.image} alt={'product image'}/>
              </ImageBox>


          </LeftBox>


          <RightBox>
              
              <TitleBox>
                  <Text fontSize='3xl'> { dotExtraContent(props.title,40)}</Text>
              </TitleBox>

              <DescriptionBox>
                  <Text>{dotExtraContent(props.description,250)} </Text>
                  <ButtonGroup  display={'flex'} justifyContent={'end'}>
                        <Button> Add to favorite</Button>
                  <Button>Show More</Button>
                  </ButtonGroup>
                
              </DescriptionBox>

          </RightBox>
      </Container>
  )
}

export default ProductDetailed

const Container = styled.div`
width: 100%;
margin: 15px;
padding: 10px;
display: flex;
justify-content: space-between;
background-color: rgba(0,0,0,${props => props.colorMode === "light" ? '0.1' : '0.3'});

:hover{
    background-color: rgba(0,0,0,${props=>props.colorMode === "light"? '0.2' : '0.5'});
}

`

const LeftBox = styled.div`
border: 1px solid ;
width: 30%;

`
const RightBox = styled.div`
width: 70%;

padding: 10px;
display: flex;
flex-direction: column;
flex: 1;
justify-content: start;


`
const ImageBox = styled.div`
display: flex;
justify-content: center;
`
const RatingBox = styled.div`

`

const TitleBox = styled.div`
border: 1px solid;
width: 100%;




`
const DescriptionBox = styled.div`
padding: 30px 0 0 0;
  width: 100%;
  flex: 0.9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`
