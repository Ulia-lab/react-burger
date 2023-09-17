import { request } from '../../utils/request'

export const POST_PASSWORD_RESET_ERROR = 'POST_PASSWORD_RESET_ERROR'
export const POST_PASSWORD_RESET_SUCCESS = 'POST_PASSWORD_RESET_SUCCESS'
export const POST_PASSWORD_RESET_REQUEST = 'POST_PASSWORD_RESET_REQUEST'
export const PASSWORD_SET_INITIAL_STATE = 'PASSWORD_SET_INITIAL_STATE'

export const postPasswordResetRequest = () => ({
    type: POST_PASSWORD_RESET_REQUEST,
})

export const postPasswordResetSuccess = (data) => ({
    type: POST_PASSWORD_RESET_SUCCESS,
    payload: data,
})

export const postPasswordResetFailure = (error) => ({
    type: POST_PASSWORD_RESET_ERROR,
    payload: error,
})

export const passwordSetInitialState = () => ({
    type: PASSWORD_SET_INITIAL_STATE,
})

export const postPasswordReset = (url, email) => async (dispatch) => {
    dispatch(postPasswordResetRequest())
    try {
        const result = await request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email),
        })

        dispatch(postPasswordResetSuccess(result))
        return result
    } catch (error) {
        dispatch(postPasswordResetFailure(error.message))
    }
}
