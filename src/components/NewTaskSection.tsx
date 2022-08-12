import axios from 'axios'
import { useState } from 'react'

export default function NewTaskSection(): JSX.Element {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskBody, setTaskBody] = useState('')
    
    function addNewTask() {
        const newTask = {
            title : taskTitle,
            body : taskBody
        }
        axios.post('https://to-do-app-nb.herokuapp.com/new/task', newTask)
        setTaskTitle('')
        setTaskBody('')
    }
  
    return (
    <>
      <input 
        type="text"
        placeholder="Title of task" 
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Body of task" 
        value={taskBody}
        onChange={(e) => setTaskBody(e.target.value)}
      />
      <button onClick={addNewTask}>
        Add new task
      </button>
    </>
  );
}
