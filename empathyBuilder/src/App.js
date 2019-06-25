import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./components/calcform/form";
import Form2 from "./components/calcform/form2";
import Info from "./components/calcform/info";
import NavBar from "./components/nav/navbar";
import SignUp from "./components/Login/signup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <route Path="/signup" component={SignUp} />
      <div className="infoForm">
        <Info />
        <div className="appForms">
          <Form />
          <Form2 />
        </div>
      </div>
    </div>
  );
}

export default App;
