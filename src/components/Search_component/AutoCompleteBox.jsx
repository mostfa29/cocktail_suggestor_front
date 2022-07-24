import React, { useEffect, useState } from 'react'
import { isContainDataWords } from '../../common/textContainword'
import './autoCompleteBox.css'
function AutoCompleteBox(props) {
  //data will get maximum 10 elements per request 
  const data = props.data
  const [filtredData,setFiltredData]=useState(data)


  
  useEffect(() => {
    setFiltredData (data.filter(elem => isContainDataWords( props.searchWord,elem)))
    
  }, [props.searchWord])
 
  
  return (
    <div
      className='autoComplete__container'
      style={
        props.show && props.searchWord ?
          { display: 'block' } :
          {
            display: 'none',
            visibility: 'hidden',
          }
      }
    >
      
      <ul>
        {filtredData.map((item) => 
          <li>{item} </li>
          )}
      </ul>
      
    </div>
  )
}

export default AutoCompleteBox