import axios from "axios";
import moment from "moment";
import { ITaskWithId } from "../types";

interface TaskProps {
  todo: ITaskWithId;
}

export default function Task({ todo }: TaskProps): JSX.Element {
  return (
    <li key={todo.id} className="task">
      <h3>{todo.title}</h3>, Body: {todo.body} Created:{" "}
      {moment(todo.date_created).format("MMM Do 'YY")}
      <input type="checkbox"></input>
      <button onClick={() => deleteTask(todo)}>delete</button>
    </li>
  );
}

function deleteTask(todo: ITaskWithId) {
  async function sendDeleteRequest() {
    await axios.delete(`https://to-do-app-nb.herokuapp.com/tasks/${todo.id}`);
  }

  sendDeleteRequest();
}
