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