import { connect } from 'react-redux';
import DeletePersons from '../Components/Admin/deletePersons'
import persons from '../api/persons'
import deletepersons from '../api/admin/deletepersons'
import { ToastsStore } from 'react-toasts'

const mapDispatchToProps = dispatch => {
    return {
        deleteperson: (value) => {
            let response
            (async () => {
                try {
                    response = await deletepersons(value);
                    ToastsStore.success("Deleted")
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        onNameChange: (value) => {
            dispatch({
                type: "SET_NAME",
                payload: value.label
            })
        },
        onRoleChange: (value) => {
            let response
            (async () => {
                try {
                    dispatch({
                        type: "ROLE_NAME",
                        payload: value
                    })
                    response = await persons(value.value);

                    dispatch({
                        type: "OPT",
                        payload: response.data.persons,
                    })

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
        role: state.deletepersons.role,
        name: state.deletepersons.name,
        roleId: state.deletepersons.roleId,
        options: state.deletepersons.options
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeletePersons);