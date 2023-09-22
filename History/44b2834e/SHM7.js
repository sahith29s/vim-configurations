import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "object",
    initialState: []
    ,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += [...state.value , ]
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer