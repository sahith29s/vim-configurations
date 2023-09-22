import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: boolean
}

const initialState: CounterState = {
    value : false
}

export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCartState : (state) => {
            state.value = true
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {changeCartState} = cartSlice.actions

export default cartSlice.reducer