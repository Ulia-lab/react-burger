import { signUpSuccess, signUpRequest, signUpFailure } from '../services/actions/signUp'

export const signUp = (url, user) => async (dispatch) => {
  dispatch(signUpRequest());
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
    dispatch(signUpSuccess(result));
    return result;
  }
  catch (error) {
    dispatch(signUpFailure(error.message));
  }
}