import { connect } from 'react-redux';
import SignUp from '../Components/signup/Signup'
import signup from '../api/signup'
import { ToastsStore } from "react-toasts"
const mapDispatchToProps = dispatch => {
    return {
        onFirstNameChange: (value) =>
            dispatch({
                type: "FIRSTNAMECHANGE",
                payload: value.target.value
            }),
        onLastNameChange: (value) =>
            dispatch({
                type: "LASTNAMECHANGE",
                payload: value.target.value
            }),
        onPasswordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value.target.value
            }),
        onLogout: () =>
            dispatch({
                type: "LOGOUT",
            }),
        signup: (value) => {
            let response;
            (async () => {
                try {
                    response = await signup(value);
                    ToastsStore.success("SignUp Successfull")
                    dispatch({
                        type: "SIGNUP",
                        payload: true,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()

        },
        setEmail: (value) =>
            dispatch({
                type: "EMAIL",
                payload: value.target.value
            }),
        setRole: (value) =>
            dispatch({
                type: "ROLE",
                payload: value.label
            }),

    };
};
const mapStateToProps = (state) => {
    return {
        firstName: state.signupreducer.firstName,
        lastName: state.signupreducer.lastName,
        password: state.signupreducer.password,
        role: state.signupreducer.role,
        email: state.signupreducer.email,
        submit: state.signupreducer.signedup,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);