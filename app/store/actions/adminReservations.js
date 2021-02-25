import { API_URL as apiUrl} from '../../constants/connection';

export const GET_RESERVATIONS_FOR_ADMIN = "GET_RESERVATIONS_FOR_ADMIN";
export const SET_SELECTED_ADMIN_RESERVATION = "SET_SELECTED_ADMIN_RESERVATION";

export const getReservationsForAdmin = () => {
    return async (dispatch, getState) => {  
        var adminID = getState().auth.user.ID;
        
        const response = await fetch(apiUrl + 'reservations/getForAdmin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    AdminID: adminID
                })
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        dispatch({
            type: GET_RESERVATIONS_FOR_ADMIN,
            data: respData
        });

        return respData.Successful;
    };
};

export const setSelectedReservation = (id, status) => {
    return async (dispatch, getState) => {
        var reservation;

        switch (status) {
            case 'Pending':
                reservation = getState().adminReservations.pendingReservations.find(x => x.ReservationID == id);
                break;
            case 'Accepted':
                reservation = getState().adminReservations.acceptedReservations.find(x => x.ReservationID == id);
                break;
            case 'Active':
                reservation = getState().adminReservations.activeReservations.find(x => x.ReservationID == id);
                break;
            case 'Completed':
                reservation = getState().adminReservations.completedReservations.find(x => x.ReservationID == id);
                break;
            case 'Cancelled':
            case 'Declined':
                reservation = getState().adminReservations.UnfinishedReservations.find(x => x.ReservationID == id);
                break;
        }

        dispatch({
            type: SET_SELECTED_ADMIN_RESERVATION,
            data: reservation
        });
    }
};