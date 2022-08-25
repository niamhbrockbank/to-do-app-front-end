import axios from "axios";
import moment from "moment";
import { useState } from "react";
import { ITask } from "../types";

export default function NewTaskSection(): JSX.Element {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");

  function addNewTask() {
    const currDateTime = moment().toISOString();

    const newTask: ITask = {
      title: taskTitle,
      body: taskBody,
      date_created: currDateTime,
    };

    axios.post("https://to-do-app-nb.herokuapp.com/tasks", newTask);
    setTaskTitle("");
    setTaskBody("");
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
      <button onClick={addNewTask}>Add new task</button>
    </>
  );
}
