import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, flexbox, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function DropDownMenu(props) {
    const {colorMode,toggleColorMode}= useColorMode()
  return (
    
        <div>
          <Menu >
      {({ isOpen }) => (
        <>
          <MenuButton style={{backgroundColor:'transparent',width:'100%',border:'1px solid'}} isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} >
            {props.openText? (isOpen ? props.openText : props.text):props.text}
          </MenuButton>

         {
          props.menuItems?
         <MenuList style={{color:colorMode==='light'?'black':'white',boxShadow:'1px -3px 18px 3px rgba(0,0,0,0.61)'}} >
            {props.menuItems.map(item=> 
            <MenuItem > 
              <Flex>
                  <Center >
                      {item.icon?item.icon:null}
                  </Center>
                  
                  <Center flex='1' pl='5' >
                      <Text>{item.text?item.text:null}</Text>
                  </Center>
              </Flex>
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