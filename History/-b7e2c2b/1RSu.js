import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reduxToolkit/counter/counterSlice'
const store = configureStore({
    reducer: { counterReducer },
})

export {store};