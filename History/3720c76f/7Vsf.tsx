import { createSlice } from '@reduxjs/toolkit'

export interface productState {
    id : number,
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
        addProduct : (state : any) => {
            // state = [...state , {id : 1 , money : "10" , title : "sahith" , image : "loda"}]
            console.log(state)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProduct} = productSlice.actions

export default productSlice.reducer