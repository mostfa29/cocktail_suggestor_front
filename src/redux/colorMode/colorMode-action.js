import * as actionTypes from "./colorMode-types"






//colorMode is the current color mode state
export const toggleColorModeAction = colorMode=>{
  
  return {
        type:actionTypes.CHANGE_COLOR_MODE,
        payload:{
            mode:colorMode.mode
        }
    }
}
