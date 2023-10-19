import React from "react";
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: () => void
}

const InputField: React.FC<Props> = (props) => {
    return (
        <>
            <form className="input" onSubmit={(e) => props.handleAdd(e)} >
                <input value={props.todo} onChange={(e) => props.setTodo(e.target.value)} type="text" placeholder="Enter a task" className="input__box" />
                <button className="input__submit" type="submit"></button>
            </form>
        </>
    )
}

export default InputField