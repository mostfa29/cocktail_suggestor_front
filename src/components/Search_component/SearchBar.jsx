import styled from 'styled-components'
import React, { createRef, useRef, useState } from 'react'
import './searchBar.css'
import {  Flex, useColorMode } from '@chakra-ui/react'
import DropDownMenu from '../DropDownMenu_component/DropDownMenu'
import { SearchIcon } from '@chakra-ui/icons'
import AutoCompleteBox from './AutoCompleteBox'
import useOutsideAlerter from '../../common/outsideElementClick'

const searchList = [
    'smoothie',
    'brande with sugar',
    'scotch coffee',
    'beerquella',
    'sex on the beach'
    ]
    
    const normalStyle = {
    	  backgroundColor: 'transparent',
                  width: '100%',
                  borderRadius:'0',
                  borderLeft: '1px solid',
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  borderRight: 'none',
                  height: '41px',
                  borderRadius: '70px 0px 0px 70px',
    }

function SearchBar() {
    const { colorMode } = useColorMode()
    const [hover, setHover] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)

    const wrapperRef = useRef(null);
    const isClickedOutside = useOutsideAlerter(wrapperRef);


    


       const hoverStyle = {
    	  backgroundColor: colorMode==='light'?'lightgray':'transparent',
                  width: '100%',
                  borderRadius:'0',
                  borderLeft: '1px solid',
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
                  borderRight: 'none',
                  height: '41px',
                  borderRadius: '70px 0px 0px 70px',
    }

    const onMouseEnter = () => {
        setHover(true)
    }
    
    const onMouseLeave = () => {
        setHover(false)
    }
//TODO if clicked inside the parent elemnt change the searchbar border color when clicked outside returnto the original border

    const handleClick = () => {
        
    }

    
    const autoComplete = (e) => {

        

            setShowSearchBox(e.target.value)


        //fire up Api call to search element close to the word ritten
        
        //pass suggestions to AutoCompleteBox 
        
        //rerender and open autoComplete
    }
  return (
 
      <div 
          className='searchBar__container'
          onClick={()=>handleClick()}
      >
          {/*to fix dropdown menu hover style */}
          <DropDownMenu 
              customStyle={
                  hover? hoverStyle: normalStyle
              }
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              text='search By'
              hideBoxShadow
              radioGroup
              
              menuItems={[
                  {
                      'order': 1,
                      'text': 'search by name'
                  },
                  {   'order':2,
                      'text': 'search by ingrediant'
                  },
                  {   'order':3,
                      'text': 'search by country'
                  },
              ]}
          />
          <Flex flexDirection={'column'} ref={wrapperRef}>
          <Input
              className='searchBar__element'
              placeholder='Get cocktail ingrediant'
              autoComplete='false'
              type="search"
              onChange={(e)=>autoComplete(e)}
              colorMode={colorMode}
          
          />
              <AutoCompleteBox data={searchList} searchWord={showSearchBox} show={!isClickedOutside} />
              
            </Flex>
          <Button
              className='searchbar__search_button'
              colorMode={colorMode}
          >
              <SearchIcon />
          </Button>
          </div>
          

  )
}

export default SearchBar

const Input = styled.input`
  
    border-top: 1px solid ${props=>props.colorMode==='light'?'black':'white'};
    border-bottom: 1px solid ${props => props.colorMode === 'light' ? 'black' : 'white'};
        :hover{
        background-color: ${props => props.colorMode === 'light' ? 'lightgray' : 'none'};
        
    }

      	transition: 500ms ease-in-out;
`
const Button = styled.button`
    :hover{
        background-color: ${props => props.colorMode === 'light' ? 'lightgray' : 'rgba(0,0,0,0.5)'};
    }

      	transition: 500ms ease-in-out;
    padding: 0 3vh;
    
    
    border-top: 1px solid ${props=>props.colorMode==='light'?'black':'white'};
    border-left: 1px solid ${props=>props.colorMode==='light'?'black':'white'};
    border-bottom: 1px solid ${props => props.colorMode === 'light' ? 'black' : 'white'};
    border-right: 1px solid ${props => props.colorMode === 'light' ? 'black' : 'white'};
    border-radius: 0px 70px 70px 0px;
`