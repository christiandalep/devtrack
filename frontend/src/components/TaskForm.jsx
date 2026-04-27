import { useState } from "react";
const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <>
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
      <button onClick={submit}>Add</button>
    </>
  );
};

export default TaskForm;
