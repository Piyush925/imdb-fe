const initialState = {
    particular: '',
    cast: '',
    rating: 0,
    review: ''
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PMOVIES": {
            return {
                ...state,
                particular: action.payload, cast: action.payload.MoviePersons
            }
        }
        case "SET_RATING": {

            return {
                ...state,
                rating: action.payload
            }
        }
        case "SET_REVIEW": {

            return {
                ...state,
                review: action.payload
            }
        }
        default: return state;
    }
}
export default movies;