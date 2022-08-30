import Task from "./Task";
import { useEffect, useState } from "react";
import { ITaskWithId } from "../types";
import sortTaskList from "../utils/sortTaskList";
import includesSearchTerm from "../utils/includesSearchTerm";

interface TaskListSectionProps {
  searchTerm: string;
}

export default function TaskListSection({
  searchTerm,
}: TaskListSectionProps): JSX.Element {
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
  const renderedTaskList = sortedTaskList.filter((task) =>
    includesSearchTerm(task, searchTerm)
  );

  return (
    <div>
      <hr />
      <ul className="task_list">
        {renderedTaskList.length > 0 ? (
          renderedTaskList.map((el) => Task({ todo: el }))
        ) : (
          <>No tasks to show</>
        )}
      </ul>
    </div>
  );
}
