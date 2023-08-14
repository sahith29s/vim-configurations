import React from 'react'
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    return (
        <div>SubTotal</div>
        <CurrencyFormat
        
        renderText={(value) =>{
            <>
                <p></p>
            </>
        }}
        />
    )
}

export default SubTotal