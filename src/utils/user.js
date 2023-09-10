import { userFailure, userRequest, userSuccess } from '../services/actions/user';
import { getCookie } from './getCookie';
import { getToken } from './token';

export const getUser = (url) => async (dispatch) => {
  dispatch(userRequest());
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie("accessToken")
      },
    });
    if (!response.ok) {
      throw new Error('Ошибка get(url)')
    }
    const result = await response.json();
    dispatch(userSuccess(result));
    return result;
  }
  catch (error) {
    dispatch(userFailure(error.message));
  }
}

export const patchUser = (url, user) => async (dispatch) => {
  getToken();
  dispatch(userRequest());
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie("accessToken")
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Ошибка get(url)')
    }
    const result = await response.json();
    dispatch(userSuccess(result));
    return result;
  }
  catch (error) {
    dispatch(userFailure(error.message));
  }
}

