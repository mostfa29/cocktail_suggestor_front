import React from 'react'
import SubHeader from '../Subheader_component/SubHeader'
import Header from './MainHeader_component/Header'

function FullHeader() {
  return (
      <div>
      <Header />
      <SubHeader/>
      </div>
  )
}

export default FullHeader