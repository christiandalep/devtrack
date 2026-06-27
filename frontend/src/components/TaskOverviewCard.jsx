import React from "react";
import "./TaskOverviewCard.css";

const TaskOverviewCard = ({ name, taskCount }) => {
  return (
    <>
      <div className="overview-card">
        <div className="overview-count">{taskCount}</div>
        <div className="overview-title">{name}</div>
      </div>
    </>
  );
};

export default TaskOverviewCard;
