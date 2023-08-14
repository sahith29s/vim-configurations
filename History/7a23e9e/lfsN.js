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
                    <img src="https://images-na.ssl-images-amazon.com/images/I/512ymog7UnL._AC_SY400_.jpg" alt="" />
                </div>

            </div>
        </>
    )
}

export default Product