const initialState = {
    movie: '',
}

const favlist = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FMOVIES": {
            return {
                ...state,
                movie: action.payload.favlist
            }
        }
        default: return state;
    }
}
export default favlist;