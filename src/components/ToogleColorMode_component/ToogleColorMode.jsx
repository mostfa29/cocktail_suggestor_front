
import './toggleColorIcon.css'
import { connect } from 'react-redux'
import ColormodeSwitch from './ColormodeSwitch'


const ToogleColorMode=(props)=> {
    // const { colorMode, toggleColorMode } = useColorMode()
    // const state= colorModeState
    
    //  console.log(mode)
    return (
      <div className='toogle_color_mode__container'>
         <ColormodeSwitch/>
      </div>
    )
  }

  // const colorModeState=state =>{
  //   // console.log(state.colorMode.mode)
  //   return{
  //     ToogleColorMode:state.colorMode.mode
  //   }
  // }

  
  

export default  ToogleColorMode