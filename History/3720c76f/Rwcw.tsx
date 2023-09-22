import { createSlice } from '@reduxjs/toolkit'

export interface productState {
    id : string,
    money : string,
    title : string,
    image : string
}

const initialState: Array<productState> = [

]
    


export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer