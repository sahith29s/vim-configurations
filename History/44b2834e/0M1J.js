import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const objectSlice = createSlice({
    name : "obj",
    initialState : {
        value : 10
    },
    reducers : {
        add : state =>{
            state.value += 1
        }
    }


})

export const {add}  =  objectSlice.actions

export default counterSlice