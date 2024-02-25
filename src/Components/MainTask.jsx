// MainTask.js
import React from "react";

const MainTask = ({ task, onDelete }) => {
  return (
    <li>
      <div>
        <h5>{task.Title}</h5>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default MainTask;
