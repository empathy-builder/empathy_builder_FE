import React from 'react'
import { connect } from 'react-redux'
// import { sendData } from '../../actions'
import DataCollectionForm from '../calcform/DataCollectionForm'
import PersonalBudgetForm from '../calcform/PersonalBudgetForm';
import RelocationBudgetForm from '../calcform/RelocationBudgetForm';

class Calculations extends React.Component {
  state={
    clickCount: 0
  }

  displayProperForm = () => {
    const { clickCount } = this.state
    if (clickCount === 0) {
      return <DataCollectionForm clickHandler={this.clickHandler}/>
    } else if (clickCount === 1) {
      return <PersonalBudgetForm clickHandler={this.clickHandler}/>
    } else if (clickCount === 2) {
      return <RelocationBudgetForm clickHandler={this.clickHandler}/>
    }
  }

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1
    })
  }

  render(){
    return(
      <div style={{height: '100vh', width: '100vw', background: 'rgba(236, 240, 241, 1)', position: 'fixed'}}>
        <div style={{position: 'relative', border: '5px solid white', boxShadow: '10px 10px 25px 34px rgba(149, 165, 166)', height: '50vh', width: '50vw', margin: 'auto', marginTop: '25vh', padding: '2.5%', zIndex: '5', background: 'rgba(103, 128, 159, 1)', textAlign: 'center'}}>
          <p style={{color: 'white', fontSize: '2em'}}>Hello! this will be the awesome questionare</p>
          {this.displayProperForm()}
          <div style={{display: 'flex', width: '90%', position: 'absolute', bottom: '0', marginBottom: '1%', justifyContent: 'center'}}>
            <button>Click Me</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sendingData: state.sendingData,
  sentData: state.sentData,
  message: state.message,
  error: state.error
})

export default connect(
  mapStateToProps,
  null
)(Calculations)