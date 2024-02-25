// TodoInput.js
import React, { useState } from "react";
import TodoList from "./TodoDisplay";

const TodoInput = () => {
  const [Title, setTitle] = useState("");
  const [MainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { Title }]);
    setTitle("");
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

      <div>
        <TodoList tasks={MainTask} onDelete={deleteHandler} />
      </div>
    </>
  );
};

export default TodoInput;
