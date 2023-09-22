import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const objectSlice = createSlice({
    name: "obj",
    initialState: [
        { "name": "sahith" }
    ],
    reducers: {
        add: (state, action) => {
            state.push("honey")
        }
    }


})

export const { add } = objectSlice.actions

export default objectSlice.reducer