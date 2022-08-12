export default function NewTaskSection(): JSX.Element {
  return (
    <>
      <input type="text" placeholder="Title of task" />
      <input type="text" placeholder="Body of task" />
      <button onClick={() => window.alert("working button")}>
        Add new task
      </button>
    </>
  );
}
