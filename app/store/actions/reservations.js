import { API_URL as apiUrl} from '../../constants/connection';

export const CREATE_RESERVATION = "CREATE_RESERVATION";

export const createReservation = reqData => {
    return async dispatch => {
        
        const response = await fetch(apiUrl + 'reservations/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    UserID: reqData.userID,
                    HarbourID: reqData.harbourID,
                    StartDate: reqData.startDate,
                    EndDate: reqData.endDate,
                    AdditionalNotes: reqData.additionalNotes
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