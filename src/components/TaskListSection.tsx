import Task from "./Task";
import { useEffect, useState } from "react";
import { ITaskWithId } from "../types";
import axios from "axios";
import moment from "moment";

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

  function deleteTask(todo: ITaskWithId) {
    async function sendDeleteRequest() {
      await axios.delete(`https://to-do-app-nb.herokuapp.com/tasks/${todo.id}`);
    }

    sendDeleteRequest();
  }

  function convertToElement(todo: ITaskWithId): JSX.Element {
    return (
      <li key={todo.id} className='task'>
        <h3>{todo.title}</h3>, Body: {todo.body} Created: {moment(todo.date_created).format("MMM Do 'YY")}
        <button onClick={() => deleteTask(todo)}>delete</button>
      </li>
    );
  }

  function sortDateDesc(task1: ITaskWithId, task2: ITaskWithId){
    if (task1.date_created < task2.date_created){
      return -1
    }
    else if (task1.date_created > task2.date_created) {
      return 1
    }
    else {
      return 0
    }
  }

  function sortTaskList(taskList : ITaskWithId[]):ITaskWithId[]{
    const sortedTaskList = taskList.sort(sortDateDesc)
    return sortedTaskList
  }

  const sortedTaskList = sortTaskList(taskList)

  return (
    <div>
      <ul className="task_list">
        {sortedTaskList.length > 0 ? (
          sortedTaskList.map(convertToElement)
        ) : (
          <>Empty task list</>
        )}
        <Task />
      </ul>
    </div>
  );
}
