import React from 'react'
import { Todo } from './Model';

const TodoList: React.FC = () => {
    interface Props {
        todos : Todo;
    }
    return (
        <>
            <div className="todos"></div>
        </>
    )
}

export default TodoList