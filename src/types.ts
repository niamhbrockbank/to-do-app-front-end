export interface ITask {
  title: string;
  body: string;
  date_created: string;
}

export interface ITaskWithId extends ITask {
  id: number;
}
