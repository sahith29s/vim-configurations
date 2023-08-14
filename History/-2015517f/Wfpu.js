export const initialState = {
    basket: []
}

const reducer = (state, action) => {
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

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
  

app.get("/", (req, res)=>{
    res.send("Hi");
});


app.listen(port, ()=>{
    console.log(`app running on port port`)
})