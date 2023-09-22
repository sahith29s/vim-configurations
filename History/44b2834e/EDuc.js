import { createSlice } from '@reduxjs/toolkit'

export const object = createSlice({
    name: "object",
    initialState: [10]
    ,
    reducers: {
        addObject : (state, action) => {
            state += [...state, action.payload]
        }
    }
})

// Action creators are generated for each case reducer function
export const { addObject } = object.actions

export default object.reducer