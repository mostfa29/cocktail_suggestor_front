import { Image } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/Logo.png';


function ProductBox(props) {
  return (
      <Container m={props.m}>
          <TopContainer>
              <Image src={logo} alt='Logo' w={'100%'} h={'100%'}  objectFit={'contain'} />
          </TopContainer>

          <BottomContainer>
              <div>
                  {/* title   */}
                  

                  {/* short description   */}
                  

                  {/* rating */}
                  


              </div>
          </BottomContainer>
      
      </Container>
      
  )
}

export default ProductBox


const Container = styled.div`
background-color: aqua;
width: 25%;
height: 100%;
border: 1px solid ;
padding: 10px;
border-radius: 5px;
margin: ${props=>props.m ? props.m : '0'};

`
const TopContainer = styled.div`

border: 0.1px solid;

border-radius: 5px;
padding: 5px;
height: 70%;
`

const BottomContainer = styled.div`


height: 30%;
`