import styled from 'styled-components'
import React from 'react'
import './searchBar.css'
import { Button, Flex, useColorMode } from '@chakra-ui/react'
import DropDownMenu from '../DropDownMenu_component/DropDownMenu'
import { SearchIcon } from '@chakra-ui/icons'

function SearchBar() {
    const { colorMode, toggleColorMode } = useColorMode()
    
    const autoComplete = (e) => {
        console.log(e.target.value)
        //fire up Api call to search element close to the word ritten

        //pass suggestions to AutoCompleteBox 
        //rerender and open autoComplete
    }
  return (
      <Flex className='searchBar__container' justifyContent={'start'} >
          <DropDownMenu className='searchBar__category_menu'
              text='search By'
              hideBoxShadow
              radioGroup
              menuItems={[
                  {'text':'search by name'},
                  {'text':'search by ingrediant'},
                  {'text':'search by country'},
              ]}
          />
          <Input
              className='searchBar__element'
              placeholder='Get cocktail ingrediant'
              autoComplete='false'
              type="search"
              onChange={(e)=>autoComplete(e)}
              colorMode={colorMode}
          
          />
          <Button className='searchbar__search_button'><SearchIcon/> </Button>
      </Flex>
  )
}

export default SearchBar

const Input = styled.input`
  
    border-top: 1px solid ${props=>props.colorMode==='light'?'black':'white'};
    border-bottom: 1px solid ${props=>props.colorMode==='light'?'black':'white'};
`