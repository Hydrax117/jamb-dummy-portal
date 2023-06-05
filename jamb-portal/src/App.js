import React from "react";
import { Home } from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Abt } from "./components/pages/about";
import { NavBar } from "./components/nav/nav";
export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Abt}></Route>
        </Routes>
      </Router>
    </>
  );
};
