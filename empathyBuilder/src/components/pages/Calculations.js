import React from "react";

import Form from "../calcform/form";
import Form2 from "../calcform/form2";
import Info from "../calcform/info";
import NavBar from "../nav/navbar";
import SignUp from "../Login/signup";

import "../../App.css";

export default function Calculations() {
  return (
    <div className="App">
      <div className="infoForm">
        <Info />
        <div className="appForms">
          <Form />
        </div>
      </div>
    </div>
  );
}
