export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_REQUEST = 'AUTH_REQUEST';

export const authSuccess = (data) => ({
    type: AUTH_SUCCESS,
    payload: data,
});

export const authFailure = (error) => ({
    type: AUTH_ERROR,
    payload: error,
});

export const authRequest = () => ({
    type: AUTH_REQUEST,
});