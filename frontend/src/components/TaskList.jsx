import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  const todoTasks = tasks.filter((task) => task.status === "TODO");
  const inProgressTasks = tasks.filter((task) => task.status === "IN-PROGRESS");
  const completedTasks = tasks.filter((task) => task.status === "COMPLETED");

  return (
    <>
      <div className="status-todo">
        TODO
        <div className="task-list">
          <ul>
            {todoTasks.map((task) => (
              <TaskItem
                key={task._id}
                _id={task._id}
                title={task.title}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="status-in-progress">
        IN-PROGRESS
        <div className="task-list">
          <ul>
            {inProgressTasks.map((task) => (
              <TaskItem
                key={task._id}
                _id={task._id}
                title={task.title}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="status-completed">
        COMPLETED
        <div className="task-list">
          <ul>
            {completedTasks.map((task) => (
              <TaskItem
                key={task._id}
                _id={task._id}
                title={task.title}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskList;
