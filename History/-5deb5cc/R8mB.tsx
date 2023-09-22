import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value : false
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCartState : (state) => {
            state.value += 1
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {changeCartState} = cartSlice.actions

export default cartSlice.reducer