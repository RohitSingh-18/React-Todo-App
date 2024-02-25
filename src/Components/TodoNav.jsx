import React from "react";
import { NavLink } from "react-router-dom";

const TodoNav = () => {
  return (
    <>
      <div className="todoNav">
        <ul className="nav-items">
          <li>
            <NavLink style={{ textDecoration: "none", color: 'black' }} to="/">
              All
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none", color: 'black' }} to="/active">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none", color: 'black' }} to="/completed">
              Completed
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoNav;
//todonav
