import { LOGIN } from '../actions/auth';

const initialState = {
    loggedIn: false,
    user: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
        default:
            return state;
    }
};