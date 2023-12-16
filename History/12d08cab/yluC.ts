import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import  dotsHoverReducer from '../feature/dotsHover/dotsHover'
// ...

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        dotsHover : dotsHoverReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch