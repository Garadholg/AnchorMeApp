import apiUrl from '../../constants/connection';

export const LOGIN = 'LOGIN';

export const login = (data) => {
    return async dispatch => {
        const response = await fetch(apiUrl + 'login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                })
            }
        );
    };
}