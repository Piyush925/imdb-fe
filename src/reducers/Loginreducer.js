const initialState = {
    password: '',
    role: '',
    email: '',
    submit: false,
    success: false,
    isAdmin: false,
}

const signinreducer = (state = initialState, action) => {
    switch (action.type) {
        case "PASSWORDCHANGE": {
            return {
                ...state,
                password: action.payload
            }
        }
        case "SUBMIT": {
            return {
                ...state,
                submit: action.payload
            }
        }
        case "SUCCESS": {
            return {
                ...state,
                success: action.payload
            }
        }
        case "ADMIN": {
            return {
                ...state,
                isAdmin: action.payload
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
export default signinreducer;