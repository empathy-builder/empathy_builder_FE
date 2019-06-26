import React from "react";

// reactstrap
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import Form from "../calcform/form";
import Calculation from "../calcform/form2";
import Form3 from "../calcform/form3";
import Info from "../calcform/info";
import NavBar from "../nav/navbar";
import SignUp from "../Login/signup";

import "../../App.css";
import "../calcform/info.css";

// export default function Calculations() {
//   return (
//     <div className="App">
//       <div className="info">
//         <div className="infoForm">
//           <Info />
//           <div className="appForms">
//             <Form />
//             <Form3 />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default class Calculations extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <div className="info">
          <Info />
          <div className="tabPortion">
            <Nav className="tabs" tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Calculate Personal Monthly Budget
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Calculate Monthly Relocation Cost
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col className="tabOne" sm="5">
                    <Form />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="5">
                    <Form3 />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}
