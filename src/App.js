import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/nav/navbar";

import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import Calculations from "./components/pages/Calculations";
import Restricted from "./components/pages/Restricted";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/calc" component={Calculations} />
      <Route exact path="/restricted" component={Restricted} />
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
