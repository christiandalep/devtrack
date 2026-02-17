const TaskList = ({ tasks, onDelete }) => {
  return (
    <>
      <h1>TaskList</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task._id}>
              ID: {task._id} Name: {task.title}{" "}
              <button onClick={() => onDelete(task._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
