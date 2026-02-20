const TaskItem = ({ _id, title, onDelete }) => {
  return (
    <>
      <li key={_id}>
        <div className="task">
          <div>ID: {_id}</div>
          <div>Name: {title} </div>
          <button onClick={() => onDelete(_id)}>Delete</button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
