const initialState = {
    list: '',
    age: ''
}


const actorlist = (state = initialState, action) => {
    switch (action.type) {
        case "LIST":

            return {
                ...state,
                list: action.payload
            }
        case "AGE":

            return {
                ...state,
                age: action.payload
            }
        default:
            return state;
    }
}

export default actorlist;

