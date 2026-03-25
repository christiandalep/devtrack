import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://192.168.50.50:5000/api/tasks");
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
      await axios.post("http://192.168.50.50:5000/api/tasks", { title });
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
      await axios.delete(`http://192.168.50.50:5000/api/tasks/${id}`);
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

  const onUpdate = async (id, title, status) => {
    try {
      await axios.patch(`http://192.168.50.50:5000/api/tasks/${id}`, {
        title,
        status,
      });
      fetchTasks();
    } catch (error) {
      if (error.response) {
        console.log(
          "Error: ",
          error.response.data.status,
          error.response.data.message,
        );
      } else {
        console.error("Failed to update task", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1 className="title">Task Dashboard</h1>
        </div>

        <div className="input-container">
          <TaskForm onAdd={onAdd} />
        </div>

        <div className="status-container">
          <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
      </div>
    </>
  );
}

export default App;
