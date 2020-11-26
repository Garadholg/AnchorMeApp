import { GET_HARBOURS_ALL } from '../actions/harbours';

const initialState = {
    harbours: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_HARBOURS_ALL:
            return {
                ...state,
                harbours: action.data,
            };
        default:
            return state;
    }
};