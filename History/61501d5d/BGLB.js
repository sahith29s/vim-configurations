import React from 'react'
import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    return (
        <>
            <div className="subtotal">

                <CurrencyFormat renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items) : <strong>0</strong>
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

            </div>
        </>
    )
}

export default SubTotal