import { authSuccess, authRequest, authFailure } from '../services/actions/auth'
import { userSuccess } from '../services/actions/user';
import { setCookie } from './getCookie';

export const auth = (url, user) => async (dispatch) => {
  dispatch(authRequest());
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Ошибка post(url)')
    }
    const result = await response.json();
    dispatch(authSuccess(result));
    dispatch(userSuccess(result));

    let authToken;
    if (result.accessToken.indexOf('Bearer') === 0) {
      authToken = result.accessToken.split('Bearer ')[1];
    }

    if (authToken) {
      setCookie("accessToken", authToken)
      localStorage.setItem("refreshToken", result.refreshToken);
    }

    return result;
  }
  catch (error) {
    dispatch(authFailure(error.message));
  }
}