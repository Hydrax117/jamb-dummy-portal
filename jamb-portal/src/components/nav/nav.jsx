import "./nav.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Abt } from "../pages/about";

export const NavBar = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        UTME SUBJECT RECOMMENDATION SYSTEM
      </h1>
      <header>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>contact</li>
          <li>join</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
