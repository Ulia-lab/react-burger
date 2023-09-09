export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';

export const signInSuccess = (data) => ({
    type: SIGN_IN_SUCCESS,
    payload: data,
});

export const signInFailure = (error) => ({
    type: SIGN_IN_ERROR,
    payload: error,
});

export const signInRequest = () => ({
    type: SIGN_IN_REQUEST,
});