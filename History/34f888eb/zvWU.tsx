import React from 'react'
import "./styles.css"

interface Props {
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>
}

const InputFeild = ({todo , setTodo} : Props) => {
    return (
        <>

            <form className='input' action="">

                <input type="input" value={todo} onChange={(e) =>{setTodo(e.target.value)}} placeholder="Enter your task" className="input__box" />
                <button className="input__submit" type="submit" >Go</button>
                
            </form>
        
        </>
    )
}

export default InputFeild