import Task from "./Task";
import { useEffect, useState } from "react";
import { ITaskWithId } from "../types";
import axios from "axios";

export default function TaskListSection(): JSX.Element {
  const [taskList, setTaskList] = useState<ITaskWithId[]>([]);

  useEffect(() => {
    async function getTaskList() {
      const response = await fetch("https://to-do-app-nb.herokuapp.com/tasks");
      const jsonBody: ITaskWithId[] = await response.json();
      setTaskList(jsonBody);
    }
    getTaskList();
  }, []);

  function deleteTask(todo : ITaskWithId){
      async function sendDeleteRequest() {
          await axios.delete(`https://to-do-app-nb.herokuapp.com/tasks/${todo.id}`);
      }
  
      sendDeleteRequest();
  }
  
  function convertToElement(todo: ITaskWithId): JSX.Element {
    return <li key={todo.id}>{todo.title}, Created: {todo.dateCreated}<button onClick={() => deleteTask(todo)}>delete</button></li>;
  }

  return (
    <div>
      <ul>
        <li>Saved to dos go here</li>
        {taskList.length > 0 ? (
          taskList.map(convertToElement)
        ) : (
          <>Empty task list</>
        )}
        <Task />
      </ul>
    </div>
  );
}
