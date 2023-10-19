import React from 'react'

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