import React from "react";
import { Link } from "react-router-dom";

const TodoNav = () => {
  return (
    <>
      <div className="todoNav">
        <ul className="nav-items">
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              All
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/active">
              Active
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/completed">
              Completed
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoNav;
//todonav
