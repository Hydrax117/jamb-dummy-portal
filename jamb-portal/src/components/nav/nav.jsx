import "./nav.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="Nav">
      <div className="title">
        <h1>Welcome, the banner goes here</h1>
      </div>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>contact</li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
