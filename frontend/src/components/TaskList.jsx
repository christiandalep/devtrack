import TaskItem from "./TaskItem/TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN-PROGRESS");
  const completedTasks = tasks.filter((task) => task.status === "COMPLETED");

  return (
    <>
      <div className="task-list-container">
        <div className="status-container">
          <div className="status-todo">TODO</div>
          <div className="task-list">
            <ul>
              {todoTasks.map((task) => (
                <TaskItem
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  status={task.status}
                  description={task.description}
                  createdAt={task.createdAt}
                  deadline={task.deadline}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="status-container">
          <div className="status-in-progress">IN-PROGRESS</div>
          <div className="task-list">
            <ul>
              {inProgressTasks.map((task) => (
                <TaskItem
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  status={task.status}
                  description={task.description}
                  createdAt={task.createdAt}
                  deadline={task.deadline}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="status-container">
          <div className="status-completed">COMPLETED</div>
          <div className="task-list">
            <ul>
              {completedTasks.map((task) => (
                <TaskItem
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  status={task.status}
                  description={task.description}
                  createdAt={task.createdAt}
                  deadline={task.deadline}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
