import todoSlice from "../assets/features/todo/todoSlice"
import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

