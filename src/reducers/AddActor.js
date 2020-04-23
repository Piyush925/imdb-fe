const initialState = {
    name: '',
    age: ''
}


const addactor = (state = initialState, action) => {
    switch (action.type) {
        case "NAME":

            return {
                ...state,
                name: action.payload
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

export default addactor;

