import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {
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
            }
        })
    }
    login = e => {
        e.preventDefault()
        this.props.login(this.state.credentials)
    }
    render(){
        return (
            <>
            {this.props.loggedIn && this.props.history.push('/')}
                <form onSubmit={this.login}>
                    Username
                    <input 
                        type="text"
                        name="email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    Password
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.loggingIn ? 
                                this.props.error ? 
                                    'Login' : 'Logging In....' 
                             : 
                                'Log In'
                        }
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn,
    error: state.error
})

export default connect(
    mapStateToProps,
    { login }
) (withRouter(LoginForm))