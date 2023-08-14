// import { getDefaultNormalizer } from "@testing-library/react";

export const initialState = {
    basket: []
}

// Selector 
// export const getBasketTotal = (basket) =>{
//     basket?.reduce((amount , item) =>{
//         item.price + amount , 0
//     })
// }

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            basket


        default:
            return state;
    }
}

export default reducer;