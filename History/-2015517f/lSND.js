// import { getDefaultNormalizer } from "@testing-library/react";

export const initialState = {
    basket: []
}

// Selector e

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        default:
            return state;
    }
}

export default reducer;