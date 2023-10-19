import React from 'react'
import { Todo } from './Model';
import SingleTodo from './SingleTodo';
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
                        return (
                            <SingleTodo item/>
                        )

                    })
                }

            </div>
        </>
    )
}

export default TodoList