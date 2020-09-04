const initialState = {
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            return {
                ...state,
                error: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                error: null
            }
        case 'LOGOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                error: null
            }
        case 'SIGNUP_FAILED':
            return {
                ...state,
                error: action.err.message
            }
        default:
            return state
    }
}

export default authReducer