import React from "react";
import { Home } from "./components/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Abt } from "./components/pages/about";
import { NavBar } from "./components/nav/nav";
import { Login } from "./components/forms/login";
import { Register } from "./components/forms/register";
export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={Abt}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </>
  );
};
