import { createSlice, configureStore  } from '@reduxjs/toolkit'
import { countReset } from 'console'



const audioSlice = createSlice({
    name: 'audio', 
    initialState: {
        play: true
    },
    reducers: {
        controlAudio: state => {
            state.play =!state.play
        }
    }
})


export const { controlAudio } = audioSlice.actions


const store = configureStore({
    reducer: audioSlice.reducer
})