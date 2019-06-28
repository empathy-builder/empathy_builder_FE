import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./form.css";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  total = () => {
    this.setState({
      completeResult: eval(`${this.props.resultOne} + ${this.props.resultTwo} `)
    });
  };

  render() {
    let { resultOne } = this.props;
    let { resultTwo } = this.props;

    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Combined Total
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Combined Personal and Relocation Budget
          </ModalHeader>
          <ModalBody>
            <h2>Total {`$` + resultTwo}</h2>
            <h2>Total {`$` + resultOne}</h2>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
