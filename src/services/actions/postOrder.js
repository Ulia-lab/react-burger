import { getCookie } from '../../utils/getCookie';
import { getToken } from './token';
import { initialState } from '../reducers/postOrder'
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const REMOVE_ORDER_MODAL_ITEM = 'REMOVE_ORDER_MODAL_ITEM';

export const postOrderRequest = () => ({
  type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (data) => ({
  type: POST_ORDER_SUCCESS,
  payload: data,
  isOpen: true,
});

export const postOrderFailure = (error) => ({
  type: POST_ORDER_ERROR,
  payload: error,
});

export const postOrderModal = () => ({
  type: REMOVE_ORDER_MODAL_ITEM,
  payload: initialState,
  isOpen: false,
});

export const postOrder = (url, orderId) => async (dispatch) => {
  getToken();
  dispatch(postOrderRequest());
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie("accessToken")
      },
      body: JSON.stringify(orderId)
    });
    if (!response.ok) {
      throw new Error('Ошибка post(url)')
    }
    const result = await response.json();
    dispatch(postOrderSuccess(result));
    return result;
  }
  catch (error) {
    dispatch(postOrderFailure(error.message));
  }
}
