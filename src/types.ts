export interface ITask {
  title: string;
  body: string;
  dateCreated: string;
}

export interface ITaskWithId extends ITask{
  id: number;
}
