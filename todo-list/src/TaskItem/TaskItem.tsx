import { ChangeEventHandler, MouseEventHandler } from "react";
import "./TaskItem.scss"

type TaskItemProps = {
        taskname:string;
        index:any;
        handleDelete:MouseEventHandler<HTMLButtonElement>;
        handleChange:ChangeEventHandler<HTMLInputElement>;
    }
   
const TaskItem = ({taskname, index, handleDelete, handleChange}:TaskItemProps) => {
    

  return (
    <div className="todo-item" >
        <li key={index}>
         <input type="checkbox" onChange={() => handleChange(index)}></input>  
          {taskname}
          <button className="todo__button" onClick={() => handleDelete(index)}>🗑️</button>
          </li>
      </div>
  )
}
 
export default TaskItem