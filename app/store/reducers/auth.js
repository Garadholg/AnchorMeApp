import { LOGIN, LOGOUT, UPDATE_ADMIN_INFO } from '../actions/auth';

const initialState = {
    loggedIn: false,
    user: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: action.data.Successful,
                user: action.data.LoggedUser
            };
        case LOGOUT: 
            return initialState;
        case UPDATE_ADMIN_INFO:
            return {
                ...state,
                user: action.data
            }
        default:
            return state;
    }
};