import { postOrderRequest, postOrderSuccess, postOrderFailure } from '../services/reducers/postOrder'

export const postOrder = (url, orderId) => async (dispatch) => {
  console.log('url', url)
  console.log('orderId', orderId)

  dispatch(postOrderRequest());
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
