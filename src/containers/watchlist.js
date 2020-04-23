import { connect } from "react-redux";
import WatchList from '../Components/watchlist/WatchList'
import getwatchlist from '../api/watchlist/getwatchlist'
import deletewatchlist from '../api/watchlist/deletewatchlist'
import { ToastsStore } from "react-toasts";
const mapDispatchToProps = dispatch => {
    return {
        getwatchlist: () => {
            let response;
            (async () => {
                try {
                    response = await getwatchlist();

                    dispatch({
                        type: "SET_WMOVIES",
                        payload: response.data,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        deletewatchlist: (id) => {
            let response, res;
            (async () => {
                try {
                    response = await deletewatchlist(id);
                    res = await getwatchlist();

                    dispatch({
                        type: "SET_WMOVIES",
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
        movie: state.watchlist.movie,
        id: state.Showmovies.id,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WatchList);