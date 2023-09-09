import { postOrderRequest, postOrderSuccess, postOrderFailure } from '../services/actions/postOrder'
import { getCookie } from './getCookie';

export const postOrder = (url, orderId) => async (dispatch) => {
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
