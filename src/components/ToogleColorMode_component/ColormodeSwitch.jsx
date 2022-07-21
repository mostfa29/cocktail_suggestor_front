import { Switch, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import './colorModeSwitch.css'
import { connect, useDispatch } from 'react-redux'
import { toggleColorModeAction } from '../../redux/colorMode/colorMode-action'

function ColormodeSwitch(props) {

  const {colorMode,toggleColorMode}=useColorMode()
  const dispatch=useDispatch()
  let mode = props.mode.colorMode.mode
 
  const changeColorMode=()=>{
        toggleColorMode() 
        
        
        dispatch(toggleColorModeAction(props.mode))
        
        
        

  }
  return (
    <div>
               <Switch  className="color_mode_switch__switch" size='lg' onChange={()=> changeColorMode()}>
          <div className='toogle_color_mode__icons'>
              {console.log(props.mode.colorMode.mode)}
              {
                mode ?
                mode==='light'?
               <SunIcon style={{color:'#FDB813'}}/> 
               :
                <MoonIcon style={{color:'#212121'}} />
                
                :null
               }

          </div>
        </Switch>
    </div>
  )
}
const mapStateToProps = (state)=> {
  return {  
    mode:state
  }
}




export default connect(mapStateToProps)(ColormodeSwitch)