import React from "react";
import Warper from "./Warper";
import Popup from "reactjs-popup";

import Calculation from "./form2";
//

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const CustomModal = () => (
  <Popup
    trigger={
      <button className="button">
        <Calculation />
      </button>
    }
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Results </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
        </div>
      </div>
    )}
  </Popup>
);

export default Warper(CustomModal);
