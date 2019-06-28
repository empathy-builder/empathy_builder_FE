import React from 'react'
import { withRouter } from 'react-router-dom'
import Info from '../info/info'

class WelcomePage extends React.Component {
    render(){
        return(
            <div style={{margin: 'auto'}}>
                <Info />
                <button style={{position: 'fixed', right: '25%', top: '50%', width: '10vw', height: '5vh'}}
                onClick={()=>{this.props.history.push('/calculations')}}
                >
                    Start now!
                </button>
            </div>
        )
    }
}

export default withRouter(WelcomePage)