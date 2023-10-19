import React from "react";
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch< React.SetStateAction<string> >
}

const InputField : React.FC<Props> = (props) => {

    return (
        <>
            <form className="input" action="">
                <input type="text" placeholder="Enter a task" className="input__box" />
                <button className="input__submit" type="submit"></button>
                
            </form>
        </>
    )
}

export default InputField