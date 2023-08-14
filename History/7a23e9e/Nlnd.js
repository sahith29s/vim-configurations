import React, { useState } from 'react'

import "./Product.css"
import { useStateValue } from './StateProvider'

const Product = (props) => {
    const  [state , dispatch] = useStateValue
    const addToBasket = () => {
        // dispatch the item to the data layer

    }
    return (
        <>
            <div className="product">

                <div className="product__info">

                    <p>{props.title}</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>

                    <div className="product__rating">
                        <p>
                            🌟
                        </p>
                    </div>
                </div>

                <div>
                    <img src={props.image} alt="" />
                </div>


                <button onClick={addToBasket}>
                    this a button
                </button>

            </div>
        </>
    )
}

export default Product