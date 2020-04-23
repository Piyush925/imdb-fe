const initialState = {
    role: '',
    roleId: '',
    name: '',
    options: []
}


const deletepersons = (state = initialState, action) => {
    switch (action.type) {
        case "OPT": {
            state.options.splice(0, state.options.length)
            action.payload.map((item, key) => {
                return state.options.push({ label: item.name, value: key })
            })
            return { ...state }
        }
        case "ROLE_NAME":

            return {
                ...state,
                role: action.payload.label,
                roleId: action.payload.value
            }
        case "SET_NAME":

            return {
                ...state,
                name: action.payload
            }
        case "SET_OPTIONS":

            return {
                ...state,
                options: action.payload
            }

        default:
            return state;
    }
}

export default deletepersons;

