import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./components/calcform/form";
import Form2 from "./components/calcform/form2";
import Info from "./components/calcform/info";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="infoForm">
        <Info />
        <Form />
        <Form2 />
      </div>
    </div>
  );
}

export default App;
