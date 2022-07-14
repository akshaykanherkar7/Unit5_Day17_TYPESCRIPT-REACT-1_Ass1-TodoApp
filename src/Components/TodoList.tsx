import React from 'react'
import { ITodos } from './Todos'

interface ITodoListProps {
    todo: ITodos
    HandleToggleTodo: (todo : ITodos) => void;
    HandleUpdateTodo: (todo : ITodos) => void;
    handleDeleteTodo: (id : number) => void
}

const TodoList = ({todo,HandleToggleTodo,HandleUpdateTodo,handleDeleteTodo} : ITodoListProps) => {

    const ToggleADDTodo :React.MouseEventHandler<HTMLButtonElement> = () => {
        HandleToggleTodo(todo)
    }

    const UpdateTodo :  React.MouseEventHandler<HTMLButtonElement> = () => {
        HandleUpdateTodo(todo)
    }

    const DeleteTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
        handleDeleteTodo(todo.id)
    }
  return (
    <div style={{border : "1px solid" , width: "fit-content" , margin: "auto", marginTop: "15px", padding: "10px"}}>
        <h4>{todo.title}</h4>
        {todo.status ? "Completed" : "notCompleted"}
        <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
            <button onClick={ToggleADDTodo}>Toggle</button>
            <button onClick={UpdateTodo}>Update</button>
            <button onClick={DeleteTodo}>Delete</button>
        </div>
    </div>
  )
}

export default TodoList