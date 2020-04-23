import { connect } from 'react-redux';
import AddActress from '../Components/Admin/AddActress'
import addperson from '../api/admin/addpersons'
import { ToastsStore } from 'react-toasts'

const mapDispatchToProps = dispatch => {
    return {
        onNameChange: (value) =>
            dispatch({
                type: "NAME",
                payload: value.target.value
            }),
        onAgeChange: (value) => {
            dispatch({
                type: "AGE",
                payload: value.target.value
            })
        },
        addperson: (values) => {
            let response;
            (async () => {
                try {
                    response = await addperson(values);
                    ToastsStore.success("Actress Added successfully")
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
    };
};
const mapStateToProps = (state) => {
    return {

        name: state.addactress.name,
        age: state.addactress.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActress);