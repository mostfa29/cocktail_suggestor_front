import React from 'react'
import { Input } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import AutoCompleteBox from './AutoCompleteBox'

// 
function Search() {
  return (
    <div className='search__container'>
      <SearchBar />
      {/*<AutoCompleteBox/>*/}
    </div>
  )
}

export default Search