import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      <h1>TaskList</h1>
      <div className="task-list">
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              _id={task._id}
              title={task.title}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
