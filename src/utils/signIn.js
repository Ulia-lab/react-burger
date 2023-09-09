import { signInSuccess, signInRequest, signInFailure } from '../services/actions/signIn'
import { setCookie } from './getCookie';
export const signIn = (url, user) => async (dispatch) => {
  dispatch(signInRequest());
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
    dispatch(signInSuccess(result));

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
    dispatch(signInFailure(error.message));
  }
}