import { authLogoutSuccess, authRequest, authFailure } from './auth'
import { setCookie } from '../../utils/getCookie';
import { request } from '../../utils/request';

export const logout = (url, token) => async (dispatch) => {
    dispatch(authRequest());
    try {
        await request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token)
        });

        dispatch(authLogoutSuccess());

        window.location.href = '/login';
        setCookie("accessToken", null, { expires: -1 })
        localStorage.clear();
    }
    catch (error) {
        dispatch(authFailure(error.message));
    }
}