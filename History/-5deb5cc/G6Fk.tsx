import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: boolean
}

const initialState: CounterState = {
    value: false,
}

export const cartOpen = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        isOpen: (state) => {
            
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {} = cartOpen.actions

export default cartOpen.reducer