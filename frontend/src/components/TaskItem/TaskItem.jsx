import { Pencil, Trash2, MoveLeft, MoveRight, Pen } from "lucide-react";
import { useState } from "react";
import { formatDate, formatInputDate } from "../../utils/dateUtils";
import "./TaskItem.css";
import TaskStatusControls from "./TaskStatusControls";

const TaskItem = ({
  _id,
  title,
  description,
  status,
  createdAt,
  deadline,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [deadlineValue, setDeadlineValue] = useState(deadline);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadlineValue(e.target.value);
  };

  const handleSaveClick = () => {
    onUpdate(_id, titleValue, descriptionValue, status, deadlineValue);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTitleValue(title);
    setDescriptionValue(description);
    setDeadlineValue(deadline);
  };

  const updateStatus = (newStatus) => {
    onUpdate(_id, titleValue, descriptionValue, newStatus, deadline);
  };

  return (
    <>
      <li key={_id}>
        <div className={`task-container${isEditing ? "-active" : ""}`}>
          <div className="task-content">
            {isEditing ? (
              <>
                <div className="task-edit-input">
                  <input
                    className="task-edit-input-title"
                    type="text"
                    value={titleValue}
                    onChange={handleTitleChange}
                  />

                  <textarea
                    className="task-edit-input-description"
                    rows={5}
                    value={descriptionValue}
                    onChange={handleDescriptionChange}
                  ></textarea>

                  <div className="task-edit-deadline-container">
                    <label for="deadline">Due Date: </label>
                    <input
                      type="date"
                      id="deadline"
                      className="task-edit-input-deadline"
                      value={formatInputDate(deadlineValue)}
                      onChange={handleDeadlineChange}
                    />
                  </div>
                </div>

                <div className="task-edit-controls">
                  <button
                    className="task-edit-cancel-button"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="task-edit-save-button"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="task-heading">
                  <div className="task-title">{titleValue}</div>
                  <div className="task-controls">
                    <button className="edit-button" onClick={handleEditClick}>
                      <Pencil size={18} />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(_id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <p className="task-description">{description}</p>
                <div className="task-deadline">
                  <span className="task-deadline-label">Due: </span>
                  <span className="task-deadline-date">
                    {formatDate(deadline)}
                  </span>
                </div>

                <div className="task-metadata">
                  <span className="task-created-at-label">Created: </span>
                  <span className="task-created-at-date">
                    {formatDate(createdAt)}
                  </span>
                </div>

                <TaskStatusControls
                  status={status}
                  updateStatus={updateStatus}
                />
              </>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
