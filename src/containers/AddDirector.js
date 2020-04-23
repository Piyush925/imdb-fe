import { connect } from 'react-redux';
import AddDirector from '../Components/Admin/AddDirector'
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
                    ToastsStore.success("Director Added successfully")
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

        name: state.adddirector.name,
        age: state.adddirector.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDirector);