import { createSlice, isAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// Define a type for the slice state
interface DotsHoverState {
    value: boolean
}

// Define the initial state using that type
const initialState: DotsHoverState = {
    value: false,
}

export const dotsHoverSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },

        dotsHoverSetFalse: (state) => {
            state.value = false;
        },

        dotsHoverSetTrue: (state) => {
            state.value = !state.value;
        },

    },
})

export const { dotsHoverSetFalse, dotsHoverSetTrue } = dotsHoverSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default dotsHoverSlice.reducer