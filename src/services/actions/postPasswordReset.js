export const POST_PASSWORD_RESET_ERROR = 'POST_PASSWORD_RESET_ERROR';
export const POST_PASSWORD_RESET_SUCCESS = 'POST_PASSWORD_RESET_SUCCESS';
export const POST_PASSWORD_RESET_REQUEST = 'POST_PASSWORD_RESET_REQUEST';

export const postPasswordResetRequest = () => ({
    type: POST_PASSWORD_RESET_REQUEST,
});

export const postPasswordResetSuccess = (data) => ({
    type: POST_PASSWORD_RESET_SUCCESS,
    payload: data,
});

export const postPasswordResetFailure = (error) => ({
    type: POST_PASSWORD_RESET_ERROR,
    payload: error,
});
