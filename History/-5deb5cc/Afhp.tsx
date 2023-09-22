import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: boolean
}

const initialState: CounterState = {
    value: false,
}

export const cartOpen = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        notOfCartOpen : (state) => {
            !state.value
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {notOfCartOpen} = cartOpen.actions

export default cartOpen.reducer