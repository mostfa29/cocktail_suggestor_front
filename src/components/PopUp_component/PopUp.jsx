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
    setIsActive(!props.open);
    
    
    }
  
  return (
      <Container props={props} colorMode={colorMode} style={( props.open && isActive)  ?{}:{'transition':' 2s ease-in-out','display':'none'}}>
      {props.section ?
        <BodyContainer>
        <SectionContainer colorMode={colorMode}>
          {props.section.map(item =>
            <SectionElem colorMode={colorMode} key={item.id} onClick={()=>{console.log('clicked')}}>
               {item.name}
            </SectionElem>
            )}
          </SectionContainer>
          <SectionDetails popupType={props.advanced} >
            <div>
            test
            </div>
          </SectionDetails>
          </BodyContainer>
      :null}
          
      {props.advanced ?
              <BottomContainer colorMode={colorMode}>
          {props.advanced.map(item =>
            <Button
              key={item.id}
              style={item.style ? item.style : {}}
              onClick={() => handleClick()}
                    >
                      {item.name ? item.name : console.log('popup advanced mode require defining name for button elements')}
                    </Button>
                    )}
              </BottomContainer>
            : null}  
      </Container>
  )
}

export default PopUp

const Container = styled.div`

z-index: 99999;
  overflow-x: hidden;
  overflow-y: hidden;
border: 0.5px solid ${props=>props.colorMode === 'light'?'rgba(255,255,255,0.2)':'rgba(0,0,0,0.2)'} ; 
width: 85vw;
height: 85vh;
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
  overflow-x:auto;
  overflow-y: hidden;
border-top: 0.5px solid ${props => props.colorMode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};
padding: 10px;
background-color:${props=>props.colorMode === 'light'?'#ffffff':'#1a202c'} ;

display: flex;
justify-content: end;
gap: 2vh;
width: 100%;
position: absolute;
bottom: 0;
height: 13%;
`

const SectionContainer = styled.ul`
  overflow-x:hidden;
  overflow-y: auto;
border-right: 0.5px solid ${props => props.colorMode === 'light' ? 'rgba(0,0,0,0.2)': 'rgba(255,255,255,0.2)' };
width: 30%;
height: 100%;
padding: 15px;
display: flex;
flex-direction: column;
justify-content : start ;


`
const SectionElem = styled.li`
list-style-type: none;

padding: 15px;
:hover{
  background-color: ${props=>props.colorMode === 'light'? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.4)'};
}



`

const BodyContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex: 1;
gap: 0;
`

const SectionDetails = styled.div`
flex: 70%;
  overflow-x:hidden;
  overflow-y: auto;
  height: ${props => props.popupType ? "87%" : '100%'};
  padding: 20px;
box-shadow: 10px -8px 12px -6px rgba(0,0,0,0.75) inset;
-webkit-box-shadow: 10px -8px 12px -6px rgba(0,0,0,0.75) inset;
-moz-box-shadow: 10px -8px 12px -6px rgba(0,0,0,0.75) inset;
`