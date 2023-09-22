import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "object",
    initialState: []
    ,
    reducers: {
        addObject : (state, action) => {
            state.value += [...state.value, action.payload]
        }
    }
})

// Action creators are generated for each case reducer function
export const { addObject } = counterSlice.actions

export default object.reducer