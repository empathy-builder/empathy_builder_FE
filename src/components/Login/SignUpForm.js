import React from 'react'
import { connect } from 'react-redux'
import { register } from '../../actions'
import { withRouter } from 'react-router-dom'

class SignUpForm extends React.Component {
    state= {
        credentials: {
            email: '',
            password: ''
        }
    }
    handleChange = e => {
            this.setState({
                credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }}) 
    }
    register = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/login')
        })
    }
    render(){
        return (
            <>
            {this.props.registered && this.props.history.push('/restricted')}
                <form onSubmit={this.register}>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        placeholder="email"
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <button>
                        Register User
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    registering: state.registering,
    registered: state.registered
})

export default connect(
    mapStateToProps,
    { register }
) (withRouter(SignUpForm))