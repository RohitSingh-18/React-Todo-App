import React from "react";
import App from "../App";
import "../App.css";
import TodoHeading from "../Components/TodoHeading";
import TodoNav from "../Components/TodoNav";

const Home = () => {
  return (
    <>
      <TodoHeading />
      <TodoNav />

      <div className="del-all-btn">
        <button className="del-btn">Delete All</button>
      </div>
    </>
  );
};

export default Home;
