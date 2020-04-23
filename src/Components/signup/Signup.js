import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.fname = React.createRef();
        this.lname = React.createRef();
        this.email = React.createRef();
        this.pass = React.createRef();

        this.state = {

            submit: false
        }

    }

    handleSubmit = () => {
        let reg_exp_ecode = /^[a-zA-Z0-9]+@+[a-zA-Z]+.+[a-zA-Z]/
        if (this.props.firstName.length <= 0) {
            ToastsStore.warning('FirstName ARE MANDATORY')
            this.fname.current.focus()
        }
        else if (this.props.lastName.length <= 0) {
            ToastsStore.warning('ALL FIELDS ARE MANDATORY')
            this.lname.current.focus()
        }
        else if (this.props.email.length <= 0 || !this.props.email.match(reg_exp_ecode)) {
            ToastsStore.warning('Valid email ARE MANDATORY')
            this.email.current.focus()
        }
        else if (this.props.password.length <= 6) {
            ToastsStore.warning('PASSWORD MUST BE GREATER THAN 6 CHARACTERS')
            this.pass.current.focus()
        }
        else if (this.props.role.length <= 0) {
            ToastsStore.warning('Role ARE MANDATORY')

        }
        else {
            let data;
            data = {
                firstName: this.props.firstName,
                lastName: this.props.lastName,
                password: this.props.password,
                role: this.props.role,
                email: this.props.email,
            }

            this.props.signup(data);



        }
    }
    render() {
        let takey = ["Admin", "User"]
        return (
            <div>
                <form >
                    <div>
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" ref={this.fname} className="form-control" placeholder="First name" onChange={this.props.onFirstNameChange} value={this.props.firstname} pattern='[A-Za-z]' title="Must be Alphabet" minLength='6' required />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" ref={this.lname} className="form-control" placeholder="Last name" onChange={this.props.onLastNameChange} value={this.props.lastname} pattern='[A-Za-z]' title="Must be Alphabet" minLength='6' required />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" ref={this.email} className="form-control" placeholder="Enter email" onChange={this.props.setEmail} value={this.props.email} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" ref={this.pass} className="form-control" placeholder="Enter password" onChange={this.props.onPasswordChange} value={this.props.password} />
                        </div>
                        <Dropdown options={takey} onChange={this.props.setRole}
                            value={this.props.role} placeholder="Select Role" />

                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                        <p className="forgot-password text-right">
                            Already registered <Link className="nav-link" to={"/signin"}>Login</Link>
                        </p>
                    </div>
                </form>

                {this.props.submit ? <Redirect to={`/signin`} /> : null}
            </div>
        );
    }
}

export default SignUp;