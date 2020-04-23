const initialState = {
    movies: [],
    actors: [],
    actress: [],
    name: '',
    director: '',
    producer: '',
    year: '',
    actorinput: '',
    actressinput: ''
}


const addmovies = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIENAME":

            return {
                ...state,
                name: action.payload
            }
        case "YEAR": {

            return {
                ...state,
                year: action.payload
            }
        }
        case "DIRECTOR": {

            return {
                ...state,
                director: action.payload
            }
        }
        case "PRODUCER": {

            return {
                ...state,
                producer: action.payload
            }
        }
        case "ACTORS": {
            console.log(state.actors)
            return {
                ...state, actors: [
                    ...state.actors,
                    state.actorinput
                ]
            }
        }
        case "ACTRESSM": {
            return {
                ...state, actress: [
                    ...state.actress,
                    state.actressinput
                ]
            }
        }
        case "DELACTORS": {
            state.actors.splice(action.payload, 1)
            return state
        }
        case "DELACTRESS": {
            state.actress.splice(action.payload, 1)
            return state
        }
        case "ACTORSINPUT": {

            return {
                ...state,
                actorinput: action.payload
            }
        }
        case "ACTRESSINPUT": {

            return {
                ...state,
                actressinput: action.payload
            }
        }

        default:
            return state;
    }
}

export default addmovies;

