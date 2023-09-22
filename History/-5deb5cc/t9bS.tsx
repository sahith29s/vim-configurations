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
        changeCartOpen: (state) => {
            state.value = true
        },

    },
})

// Action creators are generated for each case reducer function
export const { changeCartOpen } = cartOpen.actions

export default cartOpen.reducer