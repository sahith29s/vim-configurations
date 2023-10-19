import React from 'react'
import { Todo } from './Model';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = (props) => {
    return (
        <>
            <div className="todos">

                {
                    props.todos.map((item) => {
                        return (<div> {item.todo}</div>)
                    })
                }

            </div>
        </>
    )
}

export default TodoList