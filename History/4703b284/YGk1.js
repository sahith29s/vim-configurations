import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'



const CheckoutProduct = (props) => {
    const [{basket} , dispatch] = useStateValue
    return (
        <>
            <div className="checkoutProduct">
                <img src={props.image} className="checkoutProduct__image" alt="" />

                <div className="checkoutProduct__info">
                    <div className="checkoutProduct__title">
                        {props.title}
                    </div>

                    <div className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </div>

                    <div className="checkoutProduct__rating">
                        🌟
                    </div>

                    <button onClick={removeFromBasket} className="checkoutProduct__button" ></button>
                    </div>
                    
                </div>

        </>

    )
}

export default CheckoutProduct