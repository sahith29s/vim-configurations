import React from 'react'

import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    const 
    return (
        <>
            <div className="subtotal">

                <CurrencyFormat renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items) : <strong>10</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order containas a gift
                        </small>
                    </>
                )}

                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button>Proceed to Checkout</button>

            </div>
        </>
    )
}

export default SubTotal