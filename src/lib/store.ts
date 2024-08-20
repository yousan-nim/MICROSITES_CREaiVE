import type { Actions, ThunkAction} from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from './features/counter/counterSlice'
import { audioSlice } from "./features/audio/audioSlice"


export const Store = () => {
    return configureStore({
        reducer: {}
    })
}

export type AppStore = ReturnType<typeof Store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']