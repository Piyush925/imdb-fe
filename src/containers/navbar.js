import { connect } from "react-redux";
import NavBar from '../Components/navbar/navbar';
import { ToastsStore } from "react-toasts";
const mapDispatchToProps = dispatch => {
    return {

        setSuccess: (value) =>
            dispatch({
                type: "SUCCESS",
                payload: value
            }),
        setID: (value) =>
            dispatch({
                type: "ID",
                payload: value
            }),
        setsubmit: (value) => {
            dispatch({
                type: "SUBMIT",
                payload: value
            })
        },
        setAdmin: (value) =>
            dispatch({
                type: "ADMIN",
                payload: value
            }),
        onSearchChange: (value) =>
            dispatch({
                type: "SEARCH",
                payload: value.target.value
            })

    };
};
const mapStateToProps = (state) => {
    return {
        success: state.signinreducer.success,
        isAdmin: state.signinreducer.isAdmin,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);