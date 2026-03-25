import { Trash2 } from "lucide-react";

const TaskItem = ({ _id, title, onDelete }) => {
  return (
    <>
      <li key={_id}>
        <div className="task-container">
          <div className="task-content">
            <div>{title}</div>
          </div>
          <button className="delete-button" onClick={() => onDelete(_id)}>
            <Trash2 size={18} />
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
