import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }
  function deleteTask(id) {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filteredTasks);
  }
  return (
    <>
      <TaskForm addTask={addTask} />
      <h2 className="tasks-heading">Список задач</h2>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteTask={deleteTask} />;
      })}
    </>
  );
}

export default App;
