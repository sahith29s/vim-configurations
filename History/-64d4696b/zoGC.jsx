import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice"

const store = configureStore({
    reducer : j{
        users : userSlice.reducer,
    }
})

export default store