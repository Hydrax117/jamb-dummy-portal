import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <Link to="/user/dashboard">Profile</Link>
        </li>
        <li>
          <Link to="/Subject-combination">Subject Combination</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
