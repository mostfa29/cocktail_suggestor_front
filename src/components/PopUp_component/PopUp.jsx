import { Button, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components'
//2 modes to close
  //call simple prop to close with closing icon (default)
  //call advanced (...buttons) prop to close with button
  /*
  advance mode prop example 
  [{
    'id':1,
    'name':'cancel',
    'function':''(optionnal)
    'style':{}(optionnal)
    
  }]
   */


//prop section to add different section which u can toggle between them by clicking the section name sub menu button
/*section prop definiton example
 [{
 'id':1,
'name':'',
'elements':{
    {
    'id':,
    ''
    }
}
}]
*/

function PopUp(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isActive, setIsActive] = useState(true);
    
    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    }

  return (
      <Container props={props} colorMode={colorMode} style={isActive?{}:{'transition':' 2s ease-in-out','display':'none'}}>
      {props.section ?
        <SectionContainer>
          {props.section.map(item =>
            <SectionElem key={item.id} onClick={()=>{console.log('clicked')}}>
               {item.name}
            </SectionElem>
            )}
        </SectionContainer>
      :null}
          
      {props.advanced ?
              <BottomContainer>
                  {props.advanced.map(item =>
                    <Button key={item.id} style={item.style?item.style:{}}>{item.name?item.name:console.log('popup advanced mode require defining name for button elements')} </Button>
                    )}
              </BottomContainer>
            : null}  
      </Container>
  )
}

export default PopUp

const Container = styled.div`



border: 0.5px solid ${props=>props.colorMode === 'light'?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.2)'} ; 
width: 80vw;
height: 80vh;
background-color:${props=>props.colorMode === 'light'?'#ffffff':'#1a202c'} ;
align-items: center;
border-radius: 10px;
 position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: -1px 2px 30px 8px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 2px 30px 8px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 30px 8px rgba(0,0,0,0.75);


`

const BottomContainer = styled.div`
border-top: 1px solid ${colorMode => colorMode === 'light' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'};
padding: 10px;
display: flex;
justify-content: end;
gap: 2vh;
width: 100%;
position: absolute;
bottom: 0;
`

const SectionContainer = styled.div`


`
const SectionElem = styled.div`

`