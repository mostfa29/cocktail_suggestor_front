import { Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/Logo.png';

function Logo() {
  return (
    <div>
       <Image src={logo} alt='Logo' h={'40px'} />
    </div>
  )
}

export default Logo