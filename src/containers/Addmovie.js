import { connect } from 'react-redux';
import Addmovie from '../Components/Admin/Addmovie';
import addmovies from '../api/admin/addmovie'
import { ToastsStore } from 'react-toasts'
const mapDispatchToProps = dispatch => {
    return {
        addmovies: (values) => {
            let response;
            (async () => {
                try {
                    response = await addmovies(values);
                    ToastsStore.success("Actor Added successfully")
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        onMovieNameChange: (value) =>
            dispatch({
                type: "MOVIENAME",
                payload: value.target.value
            }),
        onYearChange: (value) =>
            dispatch({
                type: "YEAR",
                payload: value.target.value
            }),
        onDirectorChange: (value) =>
            dispatch({
                type: "DIRECTOR",
                payload: value.target.value
            }),
        onProducerChange: (value) =>
            dispatch({
                type: "PRODUCER",
                payload: value.target.value
            }),

        onActorInputChange: (value) =>
            dispatch({
                type: "ACTORSINPUT",
                payload: value.target.value
            }),
        onActressInputChange: (value) =>
            dispatch({
                type: "ACTRESSINPUT",
                payload: value.target.value
            }),
        delActors: (value) =>
            dispatch({
                type: "DELACTORS",
                payload: value
            }),
        delActress: (value) =>
            dispatch({
                type: "DELACTRESS",
                payload: value
            }),
        setActors: (value) =>
            dispatch({
                type: "ACTORS",
                payload: value.target.value
            }),
        setActress: (value) =>
            dispatch({
                type: "ACTRESSM",
                payload: value.target.value
            }),

    };
};
const mapStateToProps = (state) => {
    return {
        movies: state.addmovies.movies,
        actors: state.addmovies.actors,
        actress: state.addmovies.actress,
        name: state.addmovies.name,
        director: state.addmovies.director,
        producer: state.addmovies.producer,
        year: state.addmovies.year,
        actorinput: state.addmovies.actorinput,
        actressinput: state.addmovies.actressinput
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addmovie);