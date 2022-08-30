import "./styles.css";
import NewTaskSection from "./components/NewTaskSection";
import FilterSection from "./components/FilterSection";
import TaskListSection from "./components/TaskListSection";
import TitleSection from "./components/TitleSection";

function App(): JSX.Element {
  // const baseUrl = process.env.NODE_ENV === "production"
  // ? "to-do-app-nb.herokuapp.com"
  // : "localhost:5000"

  // console.log(baseUrl)
  return (
    <>
      <TitleSection />
      <FilterSection />
      <NewTaskSection />
      <TaskListSection />
      <hr />
      <footer>footer goes here</footer>
    </>
  );
}

export default App;
