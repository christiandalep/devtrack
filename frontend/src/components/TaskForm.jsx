import { useState } from "react";
import "./TaskForm.css";
const TaskForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);

  const submit = async () => {
    await onAdd(title, description, deadline);
    setTitle("");
    setDescription("");
    onClose();
  };

  return (
    <>
      <div className="input-form">
        <span>New Task</span>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="input-form-description"
          placeholder="Description"
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="input-form-date-picker">
          <input type="date" onChange={(e) => setDeadline(e.target.value)} />
        </div>
        <div className="input-form-controls">
          <button onClick={submit}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
