import "./App.css";
import React from "react";
import TodoHeading from "./Components/TodoHeading";
import TodoInput from "./Components/TodoInput";
import TodoNav from "./Components/TodoNav";

function App() {
  return (
    <>
      <TodoHeading />
      <TodoNav />
      <TodoInput />
    </>
  );
}

export default App;
