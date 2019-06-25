// import React from "react";
// import { connect } from "react-redux";
// import Loader from "react-loader-spinner";

// import { signup } from "../actions";

// export default class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   //   handleChanges = e => {
//   //       e.preventDefault();
//   //       this.setState({ [e.target.name]: e.target.value })
//   //   }

//   //   signup = e => {
//   //     e.preventDefault();
//   //     const newUser = {
//   //         username: this.state.username,
//   //         password: this.state.password,
//   //         role: this.state.role
//   //     }
//   //     this.props.signup(newUser);

//   //     this.setState({
//   //         username: '',
//   //         password: '',
//   //     })
//   // }

//   render() {
//     return <div className="pleaseWork">pleaseWork</div>;
//   }
// }

// /*     return (
//             <div className="signup">
//                 <form onSubmit={this.signup} className="signupForm">
//                     <header className="signupHeader"><h1>Join now!</h1></header>
//                     <input
//                         placeholder="Create a Username"
//                         type="text"
//                         name="username"
//                         className="form-control"
//                         value={this.state.username}
//                         onChange={this.handleChanges}
//                     />
//                     <input
//                         placeholder="Create a Password"
//                         type="text"
//                         name="password"
//                         className="form-control"
//                         value={this.state.password}
//                         onChange={this.handleChanges}
//                     />
//                     <button className="btn btn-primary btn-lg">Sign Up</button>
//                     <Link to="/login"><p className="redirectSignup">Already a member? Login here!</p></Link>
//                 </form>
//             </div>
//     )*/

// /*
// const mapStateToProps = state => {
//   return {
//     addingUser: state.signup,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { signup }
// )(SignUp);
// */
