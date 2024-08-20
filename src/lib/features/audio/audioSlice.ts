import { createSlice, configureStore  } from '@reduxjs/toolkit'
import { countReset } from 'console'



export const audioSlice = createSlice({
    name: 'audio', 
    initialState: {
        play: true
    },
    reducers: {
        controlAudio: state => {
            state.play =!state.play
        }
    },
    selectors: {
        selectAudio: (audio) => audio.play
    }
})


export const { controlAudio } = audioSlice.actions

export const { selectAudio } = audioSlice.selectors

// export const audi..... // thunk 