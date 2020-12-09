import { GET_HARBOURS_ALL, SET_SELECTED_HARBOUR } from '../actions/harbours';

const initialState = {
    harbours: [],
    selectedHarbour: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_HARBOURS_ALL:
            return {
                ...state,
                harbours: action.data,
            };
        case SET_SELECTED_HARBOUR:
            return {
                ...state,
                selectedHarbour: action.data
            };
        default:
            return state;
    }
};