import { CREATE_RESERVATION, GET_RESERVATIONS_FOR_USER, SET_SELECTED_RESERVATION, SET_RATING_FOR_RESERVATION } from '../actions/userReservations';

const initialState = {
    newReservationInfo: null,
    activeReservations: [],
    pastReservations: [],
    selectedReservation: null
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
            };
        case SET_SELECTED_RESERVATION:
            return {
                ...state,
                selectedReservation: action.data
            };
        case SET_RATING_FOR_RESERVATION:
            return {
                ...state,
                selectedReservation: action.data
            };
        default:
            return state;
    }
};