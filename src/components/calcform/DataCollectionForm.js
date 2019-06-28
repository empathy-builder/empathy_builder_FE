import React from 'react'
import timestamp from 'time-stamp'

class DataCollectionForm extends React.Component {
  state = {
    current_location: null,
    timestamp: null,
    desired_relocation: null,
    sex: null,
    relationship_status: null,
    orientation: null,
    age: null,
    race: null,
    safe_status: null,
    employed: null,
    partner_employed: null,
    children: null,
    personal_savings: null,
    individual_income: null
  }

  componentDidMount() {
    this.setState({
      timestamp: timestamp('YYYYMMDD')
    })
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  nextInput = e => {
    e.preventDefault()
    console.log(e.target)
    const submittedForm = e.target
    submittedForm.style.marginBottom = "-8vh"
    submittedForm.style.display = "none"
  }

  render(){
    return(
      <div style={{height: '8vh', overflow: 'hidden'}}>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Current Location</p>
          <input 
          pattern="[0-9]+"
          minlength="5" 
          maxlength="5" 
          onChange={this.handleChanges}
          value={this.state.current_location}
          name="current_location"
          />
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Desired Relocation</p>
          <input 
          pattern="[0-9]+"
          minlength="5" 
          maxlength="5" 
          onChange={this.handleChanges}
          placeholder=""
          value={this.state.desired_relocation}
          name="desired_relocation"
          />
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Sex</p>
          <input type="radio" id="sexChoice1"
          name="sex" value="male" onChange={this.handleChanges}/>
          <label for="sexChoice1">Male</label>

          <input type="radio" id="sexChoice2"
          name="sex" value="female" onChange={this.handleChanges}/>
          <label for="sexChoice2">Female</label>

          <input type="radio" id="sexChoice3"
          name="sex" value="other" onChange={this.handleChanges}/>
          <label for="sexChoice3">Other</label>

          <button style={{marginLeft: '2.5%'}} type="submit" >Submit</button>
      </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Relationship Status</p>
          <input type="radio" id="relationshipChoice1"
          name="relationship_status" value="Single" onChange={this.handleChanges}/>
          <label for="relationshipChoice1">Single</label>

          <input type="radio" id="relationshipChoice2"
          name="relationship_status" value="Married" onChange={this.handleChanges}/>
          <label for="relationshipChoice2">Married</label>

          <input type="radio" id="relationshipChoice3"
          name="relationship_status" value="In a Relationship" onChange={this.handleChanges}/>
          <label for="relationshipChoice3">In a Relationship</label>
          <button style={{marginLeft: '2.5%'}} type="submit">Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Orientation</p>
          <input type="radio" id="orientationChoice1"
          name="orientation" value="Straight" onChange={this.handleChanges}/>
          <label for="orientationChoice1">Straight</label>

          <input type="radio" id="orientationChoice2"
          name="orientation" value="Gay" onChange={this.handleChanges}/>
          <label for="orientationChoice2">Gay</label>

          <input type="radio" id="orientationChoice3"
          name="orientation" value="Other" onChange={this.handleChanges}/>
          <label for="orientationChoice3">Other</label>
          <button style={{marginLeft: '2.5%'}} type="submit">Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Age</p>
          <input 
          pattern="[0-9]+"
          minlength="2" 
          maxlength="3" 
          onChange={this.handleChanges}
          placeholder=""
          value={this.state.age}
          name="age"
          />
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Race</p>
          <input 
          onChange={this.handleChanges}
          placeholder=""
          value={this.state.race}
          name="race"
          />
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Safe Status</p>
          <input type="radio" id="safeChoice1"
          name="safe_status" value="Yes" onChange={this.handleChanges}/>
          <label for="safeChoice1">Yes</label>

          <input type="radio" id="safeChoice2"
          name="safe_status" value="No" onChange={this.handleChanges}/>
          <label for="safeChoice2">No</label>

          <button style={{marginLeft: '2.5%'}} type="submit" >Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Employed</p>
          <input type="radio" id="employedChoice1"
          name="employed" value="Yes" onChange={this.handleChanges}/>
          <label for="employedChoice1">Yes</label>

          <input type="radio" id="employedChoice2"
          name="employed" value="No" onChange={this.handleChanges}/>
          <label for="employedChoice2">No</label>

          <button style={{marginLeft: '2.5%'}} type="submit" >Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Partner Employed</p>
          <input type="radio" id="partnerEmployedChoice1"
          name="partner_employed" value="Yes" onChange={this.handleChanges}/>
          <label for="partnerEmployedChoice1">Yes</label>

          <input type="radio" id="partnerEmployedChoice2"
          name="partner_employed" value="No" onChange={this.handleChanges}/>
          <label for="partnerEmployedChoice2">No</label>

          <button style={{marginLeft: '2.5%'}} type="submit">Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Children</p>
          <input type="radio" id="childrenChoice1"
          name="children" value="Yes" onChange={this.handleChanges}/>
          <label for="childrenChoice1">Yes</label>

          <input type="radio" id="childrenChoice2"
          name="children" value="No" onChange={this.handleChanges}/>
          <label for="childrenChoice2">No</label>

          <button style={{marginLeft: '2.5%'}} type="submit">Submit</button>
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Personal Savings</p>
          <input 
          pattern="[0-9]+"
          onChange={this.handleChanges}
          placeholder=""
          value={this.state.personal_savings}
          name="personal_savings"
          />
        </form>
        <form style={{height: '8vh'}} onSubmit={this.nextInput}>
          <p>Individual Income</p>
          <input 
          pattern="[0-9]+"
          onChange={this.handleChanges}
          placeholder=""
          value={this.state.individual_income}
          name="individual_income"
          />
        </form>
        <button>Continue to Personal Budget</button>
        <p>Thank you for your anonomous data...this will help us create statistics to help better understand financial situation of people in a abusive relationship...</p>
      </div>
    )
  }
}

export default DataCollectionForm