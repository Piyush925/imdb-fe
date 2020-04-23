const initialState = {
    movie: '',
}

const watchlist = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WMOVIES": {
            return {
                ...state,
                movie: action.payload.watchlist
            }
        }
        default: return state;
    }
}
export default watchlist;