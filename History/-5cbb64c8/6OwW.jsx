import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "sahith",
    initialState: [],
    reducers: {
        addUser(state, action) { },
        removeUser(state, action) { },
        deleteUsers(state, action) { },
    }
}); 

export { userSlice }