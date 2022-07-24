import React from 'react'
import { Input } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import './style.css'
import PopUp from '../PopUp_component/PopUp'
// 
function Search() {
  return (
    <div className='search__container'>
      <SearchBar />
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
        />
    </div>
  )
}

export default Search