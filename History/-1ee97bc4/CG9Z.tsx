import React from 'react'
import { Todo } from './Model';
interface Props {
    todos: Todo[];
    setTodos: Todo[];
}

const TodoList: React.FC<Props> = (props) => {
    return (
        <>
            <div className="todos"></div>
        </>
    )
}

export default TodoList