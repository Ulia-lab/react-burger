import { setCookie } from "../../utils/getCookie";
import { userSuccess } from "./user";

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS
});

export const authFailure = (error) => ({
  type: AUTH_ERROR,
  payload: error,
});

export const authRequest = () => ({
  type: AUTH_REQUEST,
});


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