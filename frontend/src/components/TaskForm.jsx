import { useState } from "react";
const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const submit = async () => {
    await onAdd(title);
    setTitle("");
  };

  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={submit}>Add</button>
    </>
  );
};

export default TaskForm;
