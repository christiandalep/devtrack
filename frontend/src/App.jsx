import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/tasks");
      setTasks(response.data.tasks);
    } catch (error) {
      if (error.response) {
        console.log(
          "Error: ",
          error.response.data.status,
          error.response.data.message,
        );
      } else {
        console.error("Failed to get tasks", error);
      }
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  const onAdd = async (title) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/tasks", { title });
      fetchTasks();
    } catch (error) {
      if (error.response) {
        console.log(
          "Error: ",
          error.response.data.status,
          error.response.data.message,
        );
      } else {
        console.error("Failed to add task", error);
      }
    }
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      if (error.response) {
        console.log(
          "Error: ",
          error.response.data.status,
          error.response.data.message,
        );
      } else {
        console.error("Failed to delete task", error);
      }
    }
  };

  return (
    <>
      <TaskForm onAdd={onAdd} />
      <TaskList tasks={tasks} onDelete={onDelete} />
    </>
  );
}

export default App;
