import React from 'react'
import { Todo } from './Model';
interface Props {
    todos: Todo;
    setTodo: Todo[];
}

const TodoList: React.FC<Props> = (props) => {
    return (
        <>
            <div className="todos"></div>
        </>
    )
}

export default TodoList