import { Trash2, MoveLeft, MoveRight } from "lucide-react";

const TaskItem = ({ _id, title, status, onDelete, onUpdate }) => {
  return (
    <>
      <li key={_id}>
        <div className="task-container">
          <div className="task-content">
            <div>{title}</div>
            <button className="delete-button" onClick={() => onDelete(_id)}>
              <Trash2 size={18} />
            </button>
          </div>

          <div className="task-status-update-container">
            {status == "TODO" && (
              <button
                className="update-status-button-right"
                onClick={() => onUpdate(_id, title, "IN-PROGRESS")}
              >
                <MoveRight size={20} />
              </button>
            )}

            {status == "IN-PROGRESS" && (
              <>
                <button
                  className="update-status-button-left"
                  onClick={() => onUpdate(_id, title, "TODO")}
                >
                  <MoveLeft size={20} />
                </button>
                <button
                  className="update-status-button-right"
                  onClick={() => onUpdate(_id, title, "COMPLETED")}
                >
                  <MoveRight size={20} />
                </button>
              </>
            )}

            {status == "COMPLETED" && (
              <button
                className="update-status-button-left"
                onClick={() => onUpdate(_id, title, "IN-PROGRESS")}
              >
                <MoveLeft size={20} />
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
