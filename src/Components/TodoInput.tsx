interface ITodoInput {
    handleADDTodo : (title:string) => void
    setInputValue: (value : string) => void 
    value : string
}
const TodoInput = ({handleADDTodo,setInputValue,value}:ITodoInput) => {

    const handleOnchange : React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddTodoOnClick :  React.MouseEventHandler<HTMLButtonElement> = () => {
        handleADDTodo(value);
        setInputValue("");
    }
  return (
    <div>
        <input type="text" value={value} onChange={handleOnchange} />
        <button onClick={handleAddTodoOnClick}>ADD</button>
    </div>
  )
}

export default TodoInput