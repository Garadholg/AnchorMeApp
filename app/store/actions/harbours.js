import { API_URL as apiUrl} from '../../constants/connection';

export const GET_HARBOURS_ALL = "GET_HARBOURS_ALL";
export const SET_SELECTED_HARBOUR = "SET_SELECTED_HARBOUR";

export const getAllHarbours = () => {
    return async dispatch => {
        const response = await fetch(apiUrl + 'harbours/all',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        dispatch({
            type: GET_HARBOURS_ALL,
            data: respData.Harbours
        });
    };
};

export const setSelectedHarbour = id => {
    return async (dispatch, getState) => {
        var harbour = getState().harbours.harbours.find(x => x.ID == id);

        dispatch({
            type: SET_SELECTED_HARBOUR,
            data: harbour
        });
    }
}