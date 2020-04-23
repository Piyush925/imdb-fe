import { connect } from "react-redux";
import FavList from '../Components/favlist/Favlist'
import getfavlist from '../api/favlist/getfavlist'
import deletefavlist from '../api/favlist/deletefavlist'
import { ToastsStore } from "react-toasts";
const mapDispatchToProps = dispatch => {
    return {
        getfavlist: () => {
            let response;
            (async () => {
                try {
                    response = await getfavlist();

                    dispatch({
                        type: "SET_FMOVIES",
                        payload: response.data,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        deletefavlist: (id) => {
            let response, res;
            (async () => {
                try {
                    response = await deletefavlist(id);
                    res = await getfavlist();

                    dispatch({
                        type: "SET_FMOVIES",
                        payload: res.data,
                    })
                    ToastsStore.success("deleted")
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        setID: (value) =>
            dispatch({
                type: "ID",
                payload: value
            }),
    }
};
const mapStateToProps = (state) => {
    return {
        search: state.Showmovies.search,
        movie: state.favlist.movie,
        id: state.Showmovies.id,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavList);