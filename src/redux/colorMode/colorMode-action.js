import * as actionTypes from "./colorMode-types"


export const toggleColorModeAction = colorMode=>{

    
  return {
        type:actionTypes.CHANGE_COLOR_MODE,
        payload:{
            mode:colorMode.mode
        }
    }
}
