import React from 'react'
import "./Checkout.css"
import SubTotal from './SubTotal'

const Checkout = () => {
    return (
        <>
            <div className="checkout">

                <div className="checkout__left">
                    <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

                    <div>
                        <div className="checkout__title">
                            <h2>Your Shopping Basket</h2>
                        </div>

                    </div>


                    {/* All the basket products goes here */}
                    <div>
                        
                    </div>

                </div>

                <div className="checkout__right">
                    <SubTotal />
                </div>

            </div>
        </>
    )
}

export default Checkout