import axios from "axios";
import { useState } from "react";
import { ITask } from "../types";

export default function NewTaskSection(): JSX.Element {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");

  function addNewTask() {
    const newTask : ITask= {
      title: taskTitle,
      body: taskBody,
      dateCreated : new Date().toString()
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
