const TaskItem = ({ _id, title, onDelete }) => {
  return (
    <>
      <li key={_id}>
        <div className="task-container">
          <div className="task-content">
            <div>{title} </div>
            <button onClick={() => onDelete(_id)}>Delete</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
