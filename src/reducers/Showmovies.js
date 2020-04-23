import { SHOW_MOVIES } from '../actions/index'

const initialState = {
    movie: [],
    success: false,
    isAdmin: false,
    search: '',
    id: '',
    movieparticular: '',
    actor: [],
    actress: [],
    director: '',
    rating: '',
    year: '',
    producer: '',
    actoroptions: [],
    actressoptions: [],
    directoroptions: [],
    produceroptions: [],
    yearoptions: [],
    ratingoptions: []
}


const showmovies = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MOVIES:
            return { ...state };
        case "ACTOR": {
            state.actor.splice(0, state.actor.length)
            action.payload.map((item) => {
                return state.actor.push(item.label)
            })
            return {
                ...state,

            }
        }
        case "ACTRESS": {
            state.actress.splice(0, state.actress.length)
            action.payload.map((item) => {
                return state.actress.push(item.label)
            })
            return {
                ...state,
            }
        }
        case "REMOVE": {
            return {
                ...state, actor: action.payload.actor, actress: action.payload.actress,
                rating: action.payload.rating, producer: action.payload.producer,
                director: action.payload.director, year: action.payload.year
            }
        }
        case "RATING": {
            return {
                ...state,
                rating: action.payload
            }
        }
        case "PRODUCER": {
            return {
                ...state,
                producer: action.payload
            }
        }
        case "DIRECTOR": {
            return {
                ...state,
                director: action.payload
            }
        }
        case "YEAR": {
            return {
                ...state,
                year: action.payload
            }
        }
        case "ACTOROPT": {
            state.actoroptions.splice(0, state.actoroptions.length)
            action.payload.map((item, key) => {
                return state.actoroptions.push({ label: item.name, value: key })
            })
            return { ...state }
        }
        case "ACTRESSOPT": {
            state.actressoptions.splice(0, state.actressoptions.length)
            action.payload.map((item, key) => {
                return state.actressoptions.push({ label: item.name, value: key })
            })
            return { ...state }
        }
        case "PRODUCEROPT": {
            state.produceroptions.splice(0, state.produceroptions.length)
            action.payload.map((item) => {
                return state.produceroptions.push(item.name)
            })
            return { ...state }
        }
        case "DIRECTOROPT": {
            state.directoroptions.splice(0, state.directoroptions.length)
            action.payload.map((item, key) => {
                return state.directoroptions.push({ label: item.name, value: key })
            })
            return { ...state }
        }

        case "YEAROPT": {
            state.yearoptions.splice(0, state.yearoptions.length)
            action.payload.map((item, key) => {
                return state.yearoptions.push({ label: item.releaseYear, value: key })
            })
            return { ...state }
        }
        case "RATINGOPT": {
            state.ratingoptions.splice(0, state.ratingoptions.length)
            action.payload.map((item, key) => {
                return item.rating !== null ?
                    state.ratingoptions.push({ label: "" + item.rating, value: key }) : null
            })
            return { ...state }
        }
        case "ID": {
            return {
                ...state,
                id: action.payload
            }
        }
        case "SET_MOVIES": {
            return {
                ...state,
                movie: action.payload
            }
        }
        case "SET_PMOVIES": {
            return {
                ...state,
                movieparticular: action.payload
            }
        }
        case "SEARCH": {
            return {
                ...state,
                search: action.payload
            }
        }

        default:
            return state;
    }
}

export default showmovies;

