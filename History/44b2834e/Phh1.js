import { createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const objectSlice = createSlice({
    name: "obj",
    initialState: [
        { "name": "sahith" }
    ],
    reducers: {
        add: (state, action) => {
            console.log(action.payload.payload);
            state = [...state, action.payload.payload]
        }
    }


})

export const { add } = objectSlice.actions

export default objectSlice.reducer