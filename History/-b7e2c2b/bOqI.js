import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer,
    },
})