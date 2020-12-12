import { CREATE_RESERVATION } from '../actions/reservations';

const initialState = {
    newReservationInfo: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_RESERVATION:
            return {
                ...state,
                newReservationInfo: null,
            };
        default:
            return state;
    }
};