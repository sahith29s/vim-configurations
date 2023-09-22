import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import objectSlice from './objectSlice'

export default configureStore({
    reducer: {
        counter : counterReducer,
        object : objectSlice

    }
})

