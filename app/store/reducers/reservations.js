import { CREATE_RESERVATION, GET_RESERVATIONS_FOR_USER } from '../actions/reservations';

const initialState = {
    newReservationInfo: null,
    activeReservations: [],
    pastReservations: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_RESERVATION:
            return {
                ...state,
                newReservationInfo: null
            };
        case GET_RESERVATIONS_FOR_USER:
            return {
                ...state,
                activeReservations: action.data.ActiveReservations,
                pastReservations: action.data.PastReservations
            }
        default:
            return state;
    }
};