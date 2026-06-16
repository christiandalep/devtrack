import axios from "axios";
import "./App.css";

import { useEffect, useState } from "react";

import TaskOverviewCard from "./components/TaskOverviewCard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

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

  const onAdd = async (title, description, deadline) => {
    try {
      await axios.post("http://192.168.50.50:5000/api/tasks", {
        title,
        description,
        deadline,
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

  const onUpdate = async (id, title, description, status, deadline) => {
    try {
      let newTask = {};
      title && (newTask.title = title);
      description && (newTask.description = description);
      status && (newTask.status = status);
      deadline && (newTask.deadline = deadline);
      await axios.patch(`http://192.168.50.50:5000/api/tasks/${id}`, newTask);
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
        <button
          className="add-new-task"
          onClick={() => setIsTaskModalOpen(true)}
        >
          Add new task
        </button>

        <div className="overview-container">
          <TaskOverviewCard name={"Total Task"} taskCount={tasks.length} />
          <TaskOverviewCard
            name={"To do"}
            taskCount={tasks.filter((task) => task.status === "TODO").length}
          />
          <TaskOverviewCard
            name={"In Progress"}
            taskCount={
              tasks.filter((task) => task.status === "IN-PROGRESS").length
            }
          />
          <TaskOverviewCard
            name={"Completed"}
            taskCount={
              tasks.filter((task) => task.status === "COMPLETED").length
            }
          />
          <div />
        </div>

        {isTaskModalOpen && (
          <div className="input-container">
            <TaskForm onAdd={onAdd} onClose={() => setIsTaskModalOpen(false)} />
          </div>
        )}

        <div className="status-container">
          <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate} />
        </div>
      </div>
    </>
  );
}

export default App;
