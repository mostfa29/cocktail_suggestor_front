import { combineReducers } from "@reduxjs/toolkit";
import colorModeReducer from "./colorMode/colorMode-reducer";




const rootReducer = combineReducers({
    colorMode:colorModeReducer,
})

export default rootReducer