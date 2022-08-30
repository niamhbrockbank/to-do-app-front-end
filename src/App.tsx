import "./styles.css";
import NewTaskSection from "./components/NewTaskSection";
import FilterSection from "./components/FilterSection";
import TaskListSection from "./components/TaskListSection";
import TitleSection from "./components/TitleSection";
import { useState } from "react";

function App(): JSX.Element {
  // const baseUrl = process.env.NODE_ENV === "production"
  // ? "to-do-app-nb.herokuapp.com"
  // : "localhost:5000"

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <TitleSection />
      <FilterSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewTaskSection />
      <TaskListSection searchTerm={searchTerm} />
      <hr />
      <footer>Task Tracker</footer>
    </>
  );
}

export default App;
