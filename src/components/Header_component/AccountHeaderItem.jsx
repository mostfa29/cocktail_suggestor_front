import { SunIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import DropDownMenu from '../DropDownMenu_component/DropDownMenu'

function AccountHeaderItem() {
  return (
    <div>
      <DropDownMenu menuItems={
        [
          {
            'icon':<SunIcon/> ,
            'text':'sign in'
          },
          {
            'icon':<SunIcon/> ,
            'text':'sign in'
          }
        ]
      } />

    </div>
  )
}

export default AccountHeaderItem