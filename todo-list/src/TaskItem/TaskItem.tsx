import { MouseEventHandler } from "react";
import "./TaskItem.scss"

type TaskItemProps = {
        taskname:string;
        index:any;
        handleDelete:MouseEventHandler<HTMLButtonElement>;
    }
   
const TaskItem = ({taskname, index, handleDelete}:TaskItemProps) => {

  return (
    <div className="todo-item">
        <li key={index}>
         <button className="todo__button">✅</button>   
          {taskname}
          <button className="todo__button" onClick={() => handleDelete(index)}>🗑️</button>
          </li>
      </div>
  )
}
 
export default TaskItem