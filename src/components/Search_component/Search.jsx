import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import './style.css'
import PopUp from '../PopUp_component/PopUp'
import { EmailIcon } from '@chakra-ui/icons'
import styled from 'styled-components'

function Search() {
  const openPopUp = () => {
    
  }
  return (
    <div className='search__container'>
      <SearchBar />
      <Button rightIcon={<EmailIcon />}  variant='solid' onClick={()=>openPopUp()}>
            Filter
      </Button>
      {/*<AutoCompleteBox/>*/}
              <PopUp
          advanced={ 
            [
              {
              'id':1,
             'name':'Add filter',
              },
              {
                'id':2,
                'name':'Cancel',
              }
          ]}
        
        section={[
           {
            'id': 2,
            'name': 'Ingrediants',
            'elems':[]
          },
          {
            'id': 2,
            'name': 'Country',
            'elems':[]
          },
          {
            'id': 3,
            'name': 'Type',
            'elems':[]
          }
        ]}
        />
    </div>
  )
}

export default Search

