// MainTask.js
import React from "react";

const MainTask = ({ task, onDelete }) => {
  return (
    <li className="add-todo">
      <input className="onCheck" type="checkbox" />
        <label htmlFor="change">
          <h5>{task.Title}</h5>
        </label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default MainTask;
