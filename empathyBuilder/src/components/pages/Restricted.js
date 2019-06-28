import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import Data from '../Data'
import { withRouter } from 'react-router-dom'

class Restricted extends React.Component {
    componentDidMount() {
      this.props.getData()  
    }
    render(){
        return(
            <>
                <br/>
                <br/>
                <button>Search for Data with desired criteria</button>
                <br/>
                <br/>
                Data Count: {this.props.data && this.props.data.length}
                <br/>
                <br/>
                {this.props.data && this.props.data.map((data, i) => {
                   return <Data data={data} key={data.id} />
                })}
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    fetchingData: state.fetchingData
})

export default connect(
    mapStateToProps,
    { getData }
)(withRouter(Restricted))