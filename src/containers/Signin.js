import { connect } from "react-redux";
import Signin from '../Components/signin/Signin';
import signin from '../api/signin';
import { ToastsStore } from "react-toasts";
const mapDispatchToProps = dispatch => {
    return {
        signin: (value) => {
            let response;
            (async () => {
                try {
                    response = await signin(value);

                    if (response.status === 200) {
                        ToastsStore.success("Signin Successfull")
                        localStorage.setItem('token', JSON.stringify(response.data.token))
                        dispatch({
                            type: "SUBMIT",
                            payload: true
                        })


                        dispatch({
                            type: "SUCCESS",
                            payload: true
                        })

                        if (response.data.role === "Admin") {
                            dispatch({
                                type: "ADMIN",
                                payload: true
                            })
                        }
                    }

                }
                catch (err) {
                    ToastsStore.error("Please enter valid mail or password or role")
                }
            })()

        },

        onPasswordChange: (value) =>
            dispatch({
                type: "PASSWORDCHANGE",
                payload: value.target.value
            }),
        setAdmin: (value) =>
            dispatch({
                type: "ADMIN",
                payload: value
            }),

        setSuccess: (value) =>
            dispatch({
                type: "SUCCESS",
                payload: value
            }),

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
        password: state.signinreducer.password,
        role: state.signinreducer.role,
        email: state.signinreducer.email,
        success: state.Showmovies.success,
        isAdmin: state.Showmovies.isAdmin,
        submit: state.signinreducer.submit
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);