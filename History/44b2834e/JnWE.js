import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const objectSlice = createSlice({
    name : "obj",
    initialState : {
        value : []
    },
    reducers : {
        add : (state, action )=>{
            state.value  = [...state.value , action.payload]
        }
    }


})

export const {add}  =  objectSlice.actions

export default objectSlice.reducer