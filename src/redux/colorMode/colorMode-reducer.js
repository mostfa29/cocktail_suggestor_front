import * as actionTypes from './colorMode-types';


const INITIAL_STATE = {
    mode:'light'
}

const colorModeToggle=(state)=>{
  return  state==="light"? 'dark': "light"
}

const colorModeReducer = (state = INITIAL_STATE,action) => {
   switch (action.type) {
       case actionTypes.CHANGE_COLOR_MODE:
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