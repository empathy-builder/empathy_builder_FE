import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from "./components/calcform/form";

import "./App.css";

function App() {
  return (
    <div className="App">
      The start!
      <Form />
    </div>
  );
}

export default App;
