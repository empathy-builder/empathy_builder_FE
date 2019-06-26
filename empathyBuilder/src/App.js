import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./components/calcform/form";
import Form2 from "./components/calcform/form2";
import Info from "./components/calcform/info";
import NavBar from "./components/nav/navbar";
import SignUp from "./components/Login/signup";

import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import Calculations from "./components/pages/Calculations";
// import Calculations2 from "./components/pages/Calculations2";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/" component={Calculations} />
      {/* <Route exact path="/calcResult" component={Calculations2} /> */}
      {/* <div className="infoForm">
        <Info />
        <div className="appForms">
          <Form />
          <Form2 />
        </div>
      </div> */}
    </div>
  );
}

export default App;
