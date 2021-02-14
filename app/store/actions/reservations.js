import { API_URL as apiUrl} from '../../constants/connection';

export const CREATE_RESERVATION = "CREATE_RESERVATION";
export const GET_RESERVATIONS_FOR_USER = "GET_RESERVATIONS_FOR_USER";
export const SET_SELECTED_RESERVATION = "SET_SELECTED_RESERVATION";

export const createReservation = request => {
    return async dispatch => {
        
        const response = await fetch(apiUrl + 'reservations/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    UserID: request.userID,
                    HarbourID: request.harbourID,
                    StartDate: request.startDate,
                    EndDate: request.endDate,
                    AdditionalNotes: request.additionalNotes
                })
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        dispatch({
            type: CREATE_RESERVATION
        });

        return respData.Successful;
    };
};

export const getReservationsForUser = request => {
    return async dispatch => {
        
        const response = await fetch(apiUrl + 'reservations/getForUser',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    UserID: request
                })
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        dispatch({
            type: GET_RESERVATIONS_FOR_USER,
            data: respData
        });

        return respData.Successful;
    };
};

export const setSelectedReservation = (id, active) => {
    return async (dispatch, getState) => {
        var reservation;

        if (active) {
            reservation = getState().reservations.activeReservations.find(x => x.ReservationID == id);
        } else {
            reservation = getState().reservations.pastReservations.find(x => x.ReservationID == id);
        }

        dispatch({
            type: SET_SELECTED_RESERVATION,
            data: reservation
        });
    }
};