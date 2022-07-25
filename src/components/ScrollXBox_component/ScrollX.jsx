import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOutsideAlerter from '../../common/outsideElementClick'
import ProductBox from '../ProductBox_component/ProductBox'


function ScrollX(props) {
    const [leftChevronClicked,setLeftChevronClicked]=useState(false)
    const [rightChevronClicked, setRightChevronClicked] = useState(false)
    const wrapperRef = useRef(null);
    const isClickedOutside = useOutsideAlerter(wrapperRef);

    const handleClick = () => {
        
    }


  return (
      <div>
      <div style={{fontSize:'25px',padding:"1vh"}}>
           Top drinks
          </div>
      <Container ref={wrapperRef}>
              <ChevronLeftIcon w={10} height={10} opacity={leftChevronClicked && !isClickedOutside ? '0.8' : '0.4'} style={{ cursor: 'pointer' }} onClick={(e) => { setLeftChevronClicked(true); setRightChevronClicked(false);handleClick() }} />
          <BoxContainer>
                  {/*props.elems.map((elem) =>
                    
                  )*/}
                  <ProductBox />
                  <ProductBox />
                  <ProductBox/>
          </BoxContainer>
              <ChevronRightIcon w={10} height={10} opacity={rightChevronClicked && !isClickedOutside ? '0.8' : '0.4'} style={{ cursor: 'pointer' }} onClick={() => { setRightChevronClicked(true); setLeftChevronClicked(false);handleClick() }} />
      </Container>
  
      </div>
)}

export default ScrollX

const Container = styled.div`
width: 100%;
height: 30vw;
background-color: red;
display: flex;

justify-content: center;
align-items: center;



`

const BoxContainer = styled.div`
width: 90%;
height: 85%;
background-color: green;
display: flex;
justify-content: space-between;
padding: 20px;


`