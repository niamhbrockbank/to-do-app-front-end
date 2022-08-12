import Task from "./Task";
import { useEffect, useState } from "react";
import { ITask } from "../types";

export default function TaskListSection(): JSX.Element {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  useEffect(() => {
    async function getTaskList() {
      const response = await fetch("https://to-do-app-nb.herokuapp.com/tasks");
      const jsonBody: ITask[] = await response.json();
      setTaskList(jsonBody);
    }
    getTaskList();
  }, []);

  function convertToElement(todo: ITask): JSX.Element {
    return <li key={todo.id}>{todo.title}</li>;
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
