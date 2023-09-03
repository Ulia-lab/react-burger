import { postPasswordResetRequest, postPasswordResetSuccess, postPasswordResetFailure } from '../services/actions/postPasswordReset'

export const postPasswordReset = (url, email) => async (dispatch) => {
  dispatch(postPasswordResetRequest());
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email)
    });
    if (!response.ok) {
      throw new Error('Ошибка post(url)')
    }
    const result = await response.json();
    dispatch(postPasswordResetSuccess(result));
    return result;
  }
  catch (error) {
    dispatch(postPasswordResetFailure(error.message));
  }
}
