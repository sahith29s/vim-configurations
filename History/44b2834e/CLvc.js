import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const objectSlice = createSlice({
    name: "obj",
    initialState: [
        { "name": "sahith" }
    ],
    reducers: {
        add: (state, action) => {
            console.log(action.payload);
            state = [...state, action.payload]
        }
    }


})

export const { add } = objectSlice.actions

export default objectSlice.reducer