import { connect } from "react-redux";
import MovieDetails from '../Components/getmovies/MovieDetails'
import paticularmoviedetails from '../api/particular-movie-details';
import rating from '../api/giverating'
import { ToastsStore } from "react-toasts";
import review from '../api/review'
const mapDispatchToProps = dispatch => {
    return {
        particularmovie: (value) => {
            let response;
            (async () => {
                try {
                    response = await paticularmoviedetails(value);

                    dispatch({
                        type: "SET_PMOVIES",
                        payload: response.data.movie[0],
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        updaterating: (value) => {
            let response;
            (async () => {
                try {
                    response = await rating(value);
                    ToastsStore.success("rating submitted")

                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        review: (value) => {
            let response;
            (async () => {
                try {
                    response = await review(value);
                    ToastsStore.success("review submitted")

                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        setRating: (value) => {
            dispatch({
                type: "SET_RATING",
                payload: value.label
            })
        },
        setReview: (value) => {
            dispatch({
                type: "SET_REVIEW",
                payload: value.target.value
            })
        }
    }
};
const mapStateToProps = (state) => {
    return {
        //movie:state.Showmovies.particularmovie,
        movie: state.movies.particular,
        cast: state.movies.cast,
        rating: state.movies.rating,
        success: state.signinreducer.success,
        review: state.movies.review,
        id: state.Showmovies.id,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);