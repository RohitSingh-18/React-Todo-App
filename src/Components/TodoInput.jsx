// TodoInput.js
import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoInput = () => {
  const [Title, setTitle] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { Title }]);
  };

  const deleteHandler = (id) => {
    let copyTask = [...MainTask];
    copyTask.splice(id, 1);
    setMainTask(copyTask);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="todo-input">
        <input
          type="text"
          placeholder="add details"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="btn">Add</button>
      </form>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <TodoList tasks={MainTask} onDelete={deleteHandler} />
      </div>
    </>
  );
};

export default TodoInput;
