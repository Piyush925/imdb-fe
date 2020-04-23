import { connect } from 'react-redux';
import AddProducer from '../Components/Admin/AddProducer'
import addperson from '../api/admin/addpersons';
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
                    ToastsStore.success("Producer Added successfully")
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

        name: state.addproducer.name,
        age: state.addproducer.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProducer);