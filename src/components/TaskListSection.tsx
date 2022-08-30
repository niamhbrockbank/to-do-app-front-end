import Task from "./Task";
import { useEffect, useState } from "react";
import { ITaskWithId } from "../types";
import sortTaskList from "../utils/sortTaskList";

export default function TaskListSection(): JSX.Element {
  const [taskList, setTaskList] = useState<ITaskWithId[]>([]);

  useEffect(() => {
    async function getTaskList() {
      const response = await fetch("https://to-do-app-nb.herokuapp.com/tasks");
      const jsonBody: ITaskWithId[] = await response.json();
      setTaskList(jsonBody);
    }
    getTaskList();
  }, [taskList]);

  const sortedTaskList = sortTaskList(taskList);

  return (
    <div>
      <ul className="task_list">
        {sortedTaskList.length > 0 ? (
          sortedTaskList.map((el) => Task({ todo: el }))
        ) : (
          <>Empty task list</>
        )}
      </ul>
    </div>
  );
}
