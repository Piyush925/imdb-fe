import { connect } from 'react-redux'
import fetchDashboardData from '../api/Dashboard';
import filter from '../api/filter'
import persons from '../api/persons';
import list from '../api/rating-and-year-options';
import deletemovies from '../api/admin/deletemovie'
import { ToastsStore } from 'react-toasts';
import AdminDashboards from '../Components/Admin/AdminDashboard';

const mapStateToProps = (state) => {
    return {
        items: state.Showmovies,
        id: state.Showmovies.id,
        movie: state.Showmovies.movie,
        success: state.signinreducer.success,
        isAdmin: state.signinreducer.isAdmin,
        submit: state.signinreducer.submit,
        search: state.Showmovies.search,
        actor: state.Showmovies.actor,
        actress: state.Showmovies.actress,
        director: state.Showmovies.director,
        rating: state.Showmovies.rating,
        year: state.Showmovies.year,
        producer: state.Showmovies.producer,
        actoroptions: state.Showmovies.actoroptions,
        actressoptions: state.Showmovies.actressoptions,
        directoroptions: state.Showmovies.directoroptions,
        produceroptions: state.Showmovies.produceroptions,
        yearoptions: state.Showmovies.yearoptions,
        ratingoptions: state.Showmovies.ratingoptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setID: (value) =>
            dispatch({
                type: "ID",
                payload: value
            }),
        setDirector: (value) =>
            dispatch({
                type: "DIRECTOR",
                payload: value.label
            }),
        setProducer: (value) =>
            dispatch({
                type: "PRODUCER",
                payload: value.label
            }),
        setRating: (value) =>
            dispatch({
                type: "RATING",
                payload: value.label
            }),
        setYear: (value) =>
            dispatch({
                type: "YEAR",
                payload: value.label
            }),
        setActor: (value) =>
            dispatch({
                type: "ACTOR",
                payload: value
            }),
        setActress: (value) =>
            dispatch({
                type: "ACTRESS",
                payload: value
            }),
        deletemovie: (id) => {
            let response, res, resd, responsed, resactor, resactress, resyear, resrating;
            (async () => {
                try {
                    response = await deletemovies(id);
                    res = await fetchDashboardData();
                    dispatch({
                        type: "SET_MOVIES",
                        payload: res.data.movie,
                    })
                    ToastsStore.success("deleted")
                    resactor = await persons(1);
                    resactress = await persons(2);
                    resd = await persons(4);
                    responsed = await persons(3);
                    resyear = await list("releaseYear")
                    resrating = await list("rating")


                    dispatch({
                        type: "ACTOROPT",
                        payload: resactor.data.persons,
                    })
                    dispatch({
                        type: "ACTRESSOPT",
                        payload: resactress.data.persons,
                    })

                    dispatch({
                        type: "PRODUCEROPT",
                        payload: resd.data.persons,
                    })
                    dispatch({
                        type: "DIRECTOROPT",
                        payload: responsed.data.persons,
                    })
                    dispatch({
                        type: "YEAROPT",
                        payload: resyear.data.option,
                    })
                    dispatch({
                        type: "RATINGOPT",
                        payload: resrating.data.option,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        dashboard: () => {
            let response;
            (async () => {
                try {
                    response = await fetchDashboardData();
                    dispatch({
                        type: "SET_MOVIES",
                        payload: response.data.movie,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        setDropdown: () => {
            let response, responsed, resactor, resactress, resyear, resrating;
            (async () => {
                try {
                    resactor = await persons(1);
                    resactress = await persons(2);
                    response = await persons(4);
                    responsed = await persons(3);
                    resyear = await list("releaseYear")
                    resrating = await list("rating")


                    dispatch({
                        type: "ACTOROPT",
                        payload: resactor.data.persons,
                    })
                    dispatch({
                        type: "ACTRESSOPT",
                        payload: resactress.data.persons,
                    })

                    dispatch({
                        type: "PRODUCEROPT",
                        payload: response.data.persons,
                    })
                    dispatch({
                        type: "DIRECTOROPT",
                        payload: responsed.data.persons,
                    })
                    dispatch({
                        type: "YEAROPT",
                        payload: resyear.data.option,
                    })
                    dispatch({
                        type: "RATINGOPT",
                        payload: resrating.data.option,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        filter: (value) => {
            let response;
            (async () => {
                try {
                    response = await filter(value);
                    dispatch({
                        type: "SET_MOVIES",
                        payload: response.data.movie,
                    })
                }
                catch (err) {
                    console.log(err)
                }
            })()
        },
        onSearchChange: (value) =>
            dispatch({
                type: "SEARCH",
                payload: value.target.value
            })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboards);