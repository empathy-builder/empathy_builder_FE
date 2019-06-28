import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/nav/navbar";

import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import Restricted from "./components/pages/Restricted";
import PrivateRoute from './PrivateRoute'

import "./App.css";
import WelcomePage from "./components/pages/WelcomePage";
import Calculations from "./components/pages/Calculations";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/calculations" component={Calculations} />
      <PrivateRoute exact path="/restricted" component={Restricted} />
    </div>
  );
}

export default App;
