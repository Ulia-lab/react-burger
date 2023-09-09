export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';

export const signUpSuccess = (data) => ({
    type: SIGN_UP_SUCCESS,
    payload: data,
    isOpen: true,
});

export const signUpFailure = (error) => ({
    type: SIGN_UP_ERROR,
    payload: error,
});

export const signUpRequest = () => ({
    type: SIGN_UP_REQUEST,
});