import React from 'react'

const CheckoutProduct = (props) => {
    return (
        <>
            <div className="checkoutProduct">
                <img src={props.image} className="checkoutProduct__image" alt="" />

                <div className="checkoutProduct__info">
                    <div className="checkoutProduct__title">
                        {props.title}
                    </div>

                    
                </div>
            </div>



        </>

    )
}

export default CheckoutProduct