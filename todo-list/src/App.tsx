import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        
        </a>
      </div>
      <h1>To do List</h1>
      <div className="todo">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         <p className="todo__text">
       HIHI
      </p>
      </div>
     
    </>
  )
}

export default App
