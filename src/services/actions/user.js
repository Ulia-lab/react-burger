import { getCookie } from "../../utils/getCookie";
import { getToken } from "./token";

export const USER_ERROR = 'USER_ERROR';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_REQUEST = 'USER_REQUEST';

export const userRequest = () => ({
    type: USER_REQUEST,
});

export const userSuccess = (data) => ({
    type: USER_SUCCESS,
    payload: data,
});

export const userFailure = (error) => ({
    type: USER_ERROR,
    payload: error,
});

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
  
  