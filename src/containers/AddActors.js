import { connect } from 'react-redux';
import AddActor from '../Components/Admin/AddActors'
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
                    ToastsStore.success("Actor Added successfully")
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

        name: state.addactor.name,
        age: state.addactor.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddActor);