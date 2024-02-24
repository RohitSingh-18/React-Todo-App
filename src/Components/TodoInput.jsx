import React, { useState } from "react";

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

  let renderTask = (
    <h2
      style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      No Tasks
    </h2>
  );

  if (MainTask.length > 0) {
    renderTask = MainTask.map((task, id) => {
      return (
        <>
          <li key={id}>
            <div>
              <h5>{task.Title}</h5>
            </div>
            <button
              onClick={() => {
                deleteHandler(id);
              }}
            >
              Delete
            </button>
          </li>
        </>
      );
    });
  }

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
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default TodoInput;
//todoinput.jsx
