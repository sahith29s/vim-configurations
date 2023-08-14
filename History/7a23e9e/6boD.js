import React from 'react'
import "./Product.css"

const Product = () => {
    return (
        <>
            <div className="product">

                <div className="product__info">

                    <p>The lean Startup</p>

                    <p className="product__price">
                        <small>$</small>
                        <strong>19.99</strong>
                    </p>

                    <div className="product__rating">
                        <p>
                        🌟
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FLean-Startup-Innovation-Successful-Businesses%2Fdp%2F0670921602&psig=AOvVaw35piS8qaMtWYnPwpuxYdYD&ust=1687522802235000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDkkbvu1v8CFQAAAAAdAAAAABAW" alt="" />
                </div>

            </div>
        </>
    )
}

export default Product