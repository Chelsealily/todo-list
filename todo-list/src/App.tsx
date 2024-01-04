import {FormEvent, MouseEvent, useState } from 'react'
import './App.scss'

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputTodo, setInputTodo] = useState<string>("");

  const reset = () => window.location.reload()

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setInputTodo(event.currentTarget.value)
  }

   const handleSubmit= (event:MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTodos([...todos, inputTodo])
    setInputTodo("")
  }

  //need to fix, deletes lowest 1
 const handleDelete = (index:number, _event:MouseEvent<HTMLButtonElement>) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    console.log(index)
    setTodos(newTodos)
  }



  return (
    
      <section className="todo-container">
      <div className="todo">
        <button className="todo__button--reset" onClick={reset}> Reset </button>
      <h1>✏️ My Todo List</h1>
      
      <div className="todo__input">
      <form>
        <input type="text" placeholder="🔎 Add task.." value={inputTodo} onChange={handleInput}/>
        <button className="todo__button" onClick={handleSubmit}> ➕ </button>
      </form></div> 
      <div className="todo__output">
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
         <button className="todo__button">✅</button>   
          {todo}
          <button className="todo__button" onClick={handleDelete}>🗑️</button>
          </li>
        ))}
      </ul>
      </div></div>
</section>
      
  )
}

export default App
