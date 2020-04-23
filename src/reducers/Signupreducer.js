const initialState = {
    firstName: '',
    lastName: '',
    password: '',
    role: '',
    email: '',
    signedup: false,
    localStorageData: '',
}

const signupreducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIRSTNAMECHANGE": {
            return {
                ...state,
                firstName: action.payload
            }
        }
        case "LASTNAMECHANGE": {
            return {
                ...state,
                lastName: action.payload
            }
        }
        case "PASSWORDCHANGE": {
            return {
                ...state,
                password: action.payload
            }
        }
        case "SIGNUP": {
            return {
                ...state,
                signedup: action.payload
            }
        }
        case "LOGOUT": {
            return {
                ...state,
                userName: '',
                password: ''
            }
        }
        case "EMAIL": {

            return {
                ...state,
                email: action.payload
            }
        }
        case "ROLE": {

            return {
                ...state,
                role: action.payload
            }
        }

        default: return state;
    }
}
export default signupreducer;