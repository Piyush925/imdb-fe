import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class Signin extends Component {
    data;
    constructor(props) {
        super(props)
        this.ref = React.createRef();
        this.state = {
            submit: false,
            role: '',

        }
    }
    handleSubmit = () => {

        if (this.props.email.length <= 0) {
            ToastsStore.warning('Email should be valid email')
            this.ref.current.focus()
        }
        else {
            let data;
            data = {

                password: this.props.password,
                role: this.props.role,
                email: this.props.email,
            }

            this.props.signin(data);

        }

    }
    render() {
        let takey = ["Admin", "User"]

        return (

            <div>
                <form >
                    <div>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" ref={this.ref} className="form-control" placeholder="Enter email" value={this.props.email} onChange={this.props.setEmail} autoComplete='on' />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" value={this.props.password} onChange={this.props.onPasswordChange} autoComplete='off' />
                        </div>
                        <Dropdown options={takey} onChange={this.props.setRole}
                            value={this.props.role} placeholder="Select Role" />
                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                        <p className="forgot-password text-right">
                            Not Registered? <Link className="nav-link" to="/signup">SignUp</Link>
                        </p>
                    </div>
                </form>
                {this.props.submit ? this.props.role === "Admin" ? <Redirect to={`/admin`} /> : <Redirect to="/" /> : null}
            </div>

        );
    }
}

export default Signin;