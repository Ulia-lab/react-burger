import { authLogoutSuccess, authRequest, authFailure } from '../services/actions/auth'
import { setCookie } from './getCookie';

export const logout = (url, token) => async (dispatch) => {
    dispatch(authRequest());
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token)
        });
        if (!response.ok) {
            throw new Error('Ошибка post(url)')
        }
        dispatch(authLogoutSuccess());

        window.location.href = '/login';
        setCookie("accessToken", null, { expires: -1 })
        localStorage.clear();
    }
    catch (error) {
        dispatch(authFailure(error.message));
    }
}