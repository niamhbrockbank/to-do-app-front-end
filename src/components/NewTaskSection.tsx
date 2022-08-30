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
    <hr />
    <h2 id ='new_task_section_title'>New Task</h2>
      <div id="new_task">
        <div id="new_task_content">
          <textarea
            rows={1}
            cols={50}
            id="new_task_title"
            placeholder="Title of task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <div className="character_count">{taskTitle.length}/60</div>
          <textarea
            rows={4}
            cols={50}
            id="new_task_body"
            placeholder="Body of task"
            value={taskBody}
            onChange={(e) => setTaskBody(e.target.value)}
          />
          <div className="character_count">{taskBody.length}/255</div>
        </div>
        <button onClick={addNewTask}>Add new task</button>
      </div>
    </>
  );
}
