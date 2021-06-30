import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="col-md-2">
      <ul>
        <li>
          <Link to={"/"}>Blog Posts</Link>
        </li>
        <li>
          <Link to={"/create"}>Add new Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
