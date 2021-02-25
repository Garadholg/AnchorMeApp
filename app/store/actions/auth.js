import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL as apiUrl} from '../../constants/connection';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPDATE_ADMIN_INFO = "UPDATE_ADMIN_INFO";

export const login = reqData => {
    return async dispatch => {        
        const response = await fetch(apiUrl + 'login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: reqData.username,
                    password: reqData.password
                })
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        dispatch({
            type: LOGIN,
            data: respData
        });

        return {
            successful: respData.Successful,
            role: respData.LoggedUser.Role
        } 

    };
}

export const logout = () => {
    return async dispatch => {
        try {
            await AsyncStorage.removeItem('@login');
        } catch(e) {
            // remove error
        }

        dispatch({
            type: LOGOUT
        });
    }
}

export const updateAdminInfo = request => {
    return async (dispatch, getState) => {  
        const user = getState().auth.user;
        
        const response = await fetch(apiUrl + 'admin/updateInfo',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    HarbourID: user.AdminHarbour.ID,
                    Details: request.details,
                    QtyChange: request.qtyChange
                })
            }
        );

        const respData = await response.json();

        if (!response.ok) {
            throw respData.Message;
        }

        user.AdminHarbour.BerthsQuantity += request.qtyChange;
        user.AdminHarbour.Details = request.details; 

        dispatch({
            type: UPDATE_ADMIN_INFO,
            data: user
        });
    };
}