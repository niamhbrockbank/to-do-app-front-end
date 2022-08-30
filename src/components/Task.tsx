import axios from "axios";
import moment from "moment";
import { ITaskWithId } from "../types";

interface TaskProps {
  todo: ITaskWithId;
}

export default function Task({ todo }: TaskProps): JSX.Element {
  return (
    <li key={todo.id} className="task">
      <h3 id="task_title">{todo.title}</h3>
      <div id="task_body">{todo.body} </div>
      <div id="task_details">
        <div id="date_and_check">
          Created: {moment(todo.date_created).format("MMM Do 'YY")}
          <input type="checkbox" />
        </div>
        <button onClick={() => deleteTask(todo)} id="delete_button">
          delete
        </button>
      </div>
    </li>
  );
}

function deleteTask(todo: ITaskWithId) {
  async function sendDeleteRequest() {
    await axios.delete(`https://to-do-app-nb.herokuapp.com/tasks/${todo.id}`);
  }

  sendDeleteRequest();
}
