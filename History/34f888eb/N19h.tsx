import React from 'react'
import "./styles.css"

const InputFeild = () => {
    return (
        <>

            <form className='input' action="">

                <input type="input" placeholder="Enter your task" className="input__box" />
                <button className="input__submit" type="submit" >Go</button>
                
            </form>
        
        </>
    )
}

export default InputFeild