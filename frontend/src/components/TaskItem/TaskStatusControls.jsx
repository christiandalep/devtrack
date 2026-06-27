import { MoveLeft, MoveRight } from "lucide-react";
import "./TaskStatusControls.css";

const TaskStatusControls = ({ status, updateStatus }) => {
  return (
    <>
      <div className="task-status-update-container">
        {status === "TODO" && (
          <button
            className="update-status-button-right"
            onClick={() => updateStatus("IN-PROGRESS")}
          >
            <MoveRight size={20} />
          </button>
        )}

        {status === "IN-PROGRESS" && (
          <>
            <button
              className="update-status-button-left"
              onClick={() => updateStatus("TODO")}
            >
              <MoveLeft size={20} />
            </button>
            <button
              className="update-status-button-right"
              onClick={() => updateStatus("COMPLETED")}
            >
              <MoveRight size={20} />
            </button>
          </>
        )}

        {status === "COMPLETED" && (
          <button
            className="update-status-button-left"
            onClick={() => updateStatus("IN-PROGRESS")}
          >
            <MoveLeft size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default TaskStatusControls;
