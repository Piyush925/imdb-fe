import { connect } from 'react-redux';
import Actorlist from '../Components/actor/Actorlist'
import actorlist from '../api/actorlist'

const mapDispatchToProps = dispatch => {
    return {
        actorlist: () => {
            let response;
            (async () => {
                try {
                    response = await actorlist();
                    dispatch({
                        type: "LIST",
                        payload: response.data.actors,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        setAge: (value) => {
            dispatch({
                type: "AGE",
                payload: value.target.value,
            })
        }

    };
}
const mapStateToProps = (state) => {
    return {
        list: state.actorlist.list,
        age: state.actorlist.age
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Actorlist);