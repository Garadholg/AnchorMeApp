import { API_URL as apiUrl} from '../../constants/connection';

export const GET_HARBOURS_ALL = "GET_HARBOURS_ALL";

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
            data: respData.data
        });
    };
};