import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import objectReducer from './objectSlice'

export default configureStore({
    reducer: {
        counter : counterReducer,
        object : objectReducer
    }
})

