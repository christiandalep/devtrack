import { useState } from "react";
import "./TaskForm.css"
const TaskForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await onAdd(title, description);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <>
      <div className="input-form">
        <span>New Task</span>
        <input
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="input-form-controls">
          <button onClick={submit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
