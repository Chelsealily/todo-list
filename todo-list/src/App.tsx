import {FormEvent, MouseEvent, useState } from 'react'
import './App.scss'
import TaskItem from './TaskItem/TaskItem';

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

  const handleDelete = (index:any) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
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
        {todos.map((task, index) => (
          <TaskItem key={index} taskname = {task} index = {index} handleDelete={handleDelete}/>))}
      </ul>    
      </div></div>
</section>
      
  )
}

export default App
