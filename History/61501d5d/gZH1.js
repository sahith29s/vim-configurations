import React from 'react'

import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

const SubTotal = () => {
    const [{basket} , dispatch ] = useStateValue()

    let totalMoney = 0
    basket && basket.map((item , index ,arrary) => {  

        totalMoney = parseInt(item.price) + totalMoney
        
    });
    return (
        <>
            <div className="subtotal">

                

                <CurrencyFormat renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{totalMoney || "Nothing Added Yet"} </strong>
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