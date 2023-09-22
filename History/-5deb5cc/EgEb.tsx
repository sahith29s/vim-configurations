import { createSlice } from '@reduxjs/toolkit'

export interface cart {
    value: boolean | number
}

const initialState: cart = {
    value: false,
}

export const cartOpen = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        changeCartOpen: (state) => {
            state.value = !state.value
        },

    },
})

// Action creators are generated for each case reducer function
export const { changeCartOpen } = cartOpen.actions

export default cartOpen.reducer