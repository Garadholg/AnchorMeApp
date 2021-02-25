import { GET_RESERVATIONS_FOR_ADMIN, SET_SELECTED_ADMIN_RESERVATION } from '../actions/adminReservations';

const initialState = {
    pendingReservations: [],
    acceptedReservations: [],
    activeReservations: [],
    completedReservations: [],
    unfinishedReservations: [],
    selectedReservation: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_RESERVATIONS_FOR_ADMIN:
            return {
                ...state,
                pendingReservations: action.data.PendingReservations,
                acceptedReservations: action.data.AcceptedReservations,
                activeReservations: action.data.ActiveReservations,
                completedReservations: action.data.CompletedReservations,
                unfinishedReservations: action.data.UnfinishedReservations,
            };
        case SET_SELECTED_ADMIN_RESERVATION:
            return {
                ...state,
                selectedReservation: action.data
            };
        default:
            return state;
    }
};