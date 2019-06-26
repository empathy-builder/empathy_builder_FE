import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions'

class Restricted extends React.Component {
    render(){
        return(
            <>
                Data
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
)(Restricted)