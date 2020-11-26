import AsyncStorage from '@react-native-async-storage/async-storage';

import { API_URL as apiUrl} from '../../constants/connection';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

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

        return respData.Successful;

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