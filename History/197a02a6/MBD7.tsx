import React, { FormEvent, useRef, useState } from 'react'
import { Todo } from './Model'
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(props.todo.todo)

    const handleDone = (id: number) => {
        props.setTodos(props.todos.map((todo) => todo.id === id ?
            { ...todo, isDone: !todo.isDone } :
            todo
        ))
    };

    const handleDelete = (id: number) => {
        let arr = props.todos.filter((item) => { return item.id != id })
        props.setTodos([...arr])

    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        props.todos.map((todo) => {
            console.log(todo);
        })

    };

    return (
        <>
            <form action="" onSubmit={(e) => handleEdit(e, props.todo.id)} className="todos__single">
                {
                    edit ? (
                        <input ref={(inputRef) => inputRef?.focus()}
                            className="todos__single__text"
                            type="text"
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}

                        />
                    ) :
                        (
                            (props.todo.isDone) ?
                                (<s className="todos__single__text">{props.todo.todo} </s>)
                                :
                                (<span className="todos__single__text">{props.todo.todo} </span>)

                        )
                }

                <div>
                    <span className="icon" onClick={() => {
                        if (!edit && !props.todo.isDone) {
                            setEdit(!edit)
                        }

                    }
                    }>
                        <AiFillEdit />
                    </span>
                    <span className="icon"
                        onClick={() => handleDelete(props.todo.id)}
                    >
                        <AiFillDelete />
                    </span>
                    <span className="icon"
                        onClick={() => handleDone(props.todo.id)}
                    >
                        <MdDone />
                    </span>
                </div>
            </form>

        </>
    )
}

export default SingleTodo