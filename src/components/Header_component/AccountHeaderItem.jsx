import { SunIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import React from 'react'
import DropDownMenu from '../DropDownMenu_component/DropDownMenu'

function AccountHeaderItem() {
  return (
    <div>
      <DropDownMenu
       text='User'
       menuItems={
        [
          {
            'icon':<SunIcon/> ,
            'text':'sign in'
          },
          {
            'icon':<SunIcon/> ,
            'text':'Account'
          }
        ]
      } />

    </div>
  )
}

export default AccountHeaderItem