// TodoList.js
import React from "react";
import MainTask from "./MainTask";

const TodoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((task, id) => (
        <MainTask key={id} task={task} onDelete={() => onDelete(id)} />
      ))}
    </ul>
  );
};

export default TodoList;
