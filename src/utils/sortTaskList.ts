import { ITaskWithId } from "../types";

export default function sortTaskList(taskList: ITaskWithId[]): ITaskWithId[] {
  const sortedTaskList = taskList.sort(sortDateDesc);
  return sortedTaskList;
}

function sortDateDesc(task1: ITaskWithId, task2: ITaskWithId) {
  if (task1.date_created < task2.date_created) {
    return -1;
  } else if (task1.date_created > task2.date_created) {
    return 1;
  } else {
    return 0;
  }
}
