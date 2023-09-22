import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface productState [

]

const initialState: productState = {
    
}

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer