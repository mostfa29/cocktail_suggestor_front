import * as actionTypes from './colorMode-types';

//light mode is default
const INITIAL_STATE = {
    mode:'light'
}

const colorModeToggle=(state)=>{
  return  state==="light"? 'dark': "light"
}

const colorModeReducer = (state = INITIAL_STATE,action) => {
   switch (action.type) {
       case actionTypes.CHANGE_COLOR_MODE:
       //change color mode state
       const colorNewState=colorModeToggle(state.mode)
       
       return {
           ...state,
        mode:colorNewState,
        
           
   };

       default:
       return state;
   }
}


export default colorModeReducer