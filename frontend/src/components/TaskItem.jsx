import { Pencil, Trash2, MoveLeft, MoveRight, Pen } from "lucide-react";
import { useState } from "react";

const TaskItem = ({ _id, title, status, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleSaveClick = () => {
    onUpdate(_id, titleValue);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <li key={_id}>
        <div className="task-container">
          <div className="task-content">
            {isEditing ? (
              <>
                <input
                  className="task-edit-input"
                  type="text"
                  value={titleValue}
                  onChange={handleTitleChange}
                />
                <div className="task-controls">
                  <button
                    className="task-edit-save-button"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                  <button
                    className="task-edit-cancel-button"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <span>{titleValue}</span>
                <div className="task-controls">
                  <button
                    className="edit-button"
                    onClick={() => setIsEditing(true)}
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDelete(_id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </>
            )}
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
