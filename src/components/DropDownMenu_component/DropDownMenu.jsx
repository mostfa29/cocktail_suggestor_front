import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, flexbox, Menu, MenuButton, MenuItem, MenuList, Radio, Spacer, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

function DropDownMenu(props) {
  const { colorMode, toggleColorMode } = useColorMode()
  // const [radioKey,setRadioKey]=useState(0)
  const [radioSelected, setRadioSelected] = useState(-1)
  

  const handleMenuItemClick = (e) => {
    if (props.radioGroup)
      
      console.log(e)
  }



  return (
    
        <div className='dropDownMenu__container'>
          <Menu >
      {({ isOpen }) => (
        <>
          <MenuButton className='dropDownMenu__menuButton' style={props.customStyle?props.customStyle:{backgroundColor:'transparent',width:'100%',border:'1px solid'}} isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} >
              {
                props.openText ?
                (isOpen ? props.openText : props.text) :
                props.radioGroup && props.menuItems >-1 ? props.menuItems[radioSelected].text : props.text
              }
          </MenuButton>

         {
          props.menuItems?
         <MenuList style={{color:colorMode==='light'?'black':'white',boxShadow:props.hideBoxShadow?'none':'1px -3px 18px 3px rgba(0,0,0,0.61)'}} >
            {props.menuItems.map((item)=> 
              <MenuItem key={item.order} onClick={()=>handleMenuItemClick(item.order)} > 
                
                 
                {props.radioGroup ? 
                  <Radio size='lg' name='1' colorScheme='green'>
                  <Text>{item.text ? item.text : null}</Text>
                  </Radio>
                  :
                  <Flex>
                 
                    <Center >
                      {item.icon ? item.icon : null}
                    </Center>
                  
                    <Center flex='1' pl='5' >
                      <Text>{item.text ? item.text : null}</Text>
                    </Center>
                  
                  </Flex>
                }
            </MenuItem>
            )}
          </MenuList>
          : null}
        </>
      )}
    </Menu>
        </div>
      )
    }


export default DropDownMenu