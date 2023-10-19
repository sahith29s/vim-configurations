import React, { useRef } from "react";
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputField: React.FC<Props> = (props) => {
    const inputRef = useRef(null)
    return (
        <>
            <form className="input"
                onSubmit={
                    (e) => {
                        props.handleAdd(e);
                        inputRef.current?.blur();
                    }
                } >
                <input
                    ref={inputRef}
                    value={props.todo}
                    onChange={(e) => props.setTodo(e.target.value)}
                    type="text"
                    placeholder="Enter a task"
                    className="input__box" />
                <button className="input__submit" type="submit">Go</button>
            </form >
        </>
    )
}

export default InputField