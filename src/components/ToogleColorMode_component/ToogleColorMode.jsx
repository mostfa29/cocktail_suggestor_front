
import './toggleColorIcon.css'
import { connect } from 'react-redux'
import ColormodeSwitch from './ColormodeSwitch'


const ToogleColorMode=(props)=> {

    return (
      <div className='toogle_color_mode__container'>
         <ColormodeSwitch/>
      </div>
    )
  }

export default  ToogleColorMode