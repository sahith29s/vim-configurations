import React from 'react'

import "./SubTotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { NavigationRounded } from '@mui/icons-material'

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
                            {/* Subtotal ({basket.length} items) : <strong>{"$" + totalMoney || "Nothing Added Yet"} </strong> */}
                            Subtotal ({basket.length} items) : <strong>{value} </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order containas a gift
                        </small>
                    </>
                )}
                    decimalScale={2}
                    value={"$ " + totalMoney || "Nothing Added Yet"}
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

Name : M Nava Sahith Ganesh 
Years : 14 years 
Class : 11th 
Address : 7-2-1087/A/109 , sanath nagar 
Date of Brith = 29 th sep 2008
