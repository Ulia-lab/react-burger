import { getCookie } from '../../utils/getCookie'
import { request } from '../../utils/request'
import { getToken } from './token'

export const USER_ERROR = 'USER_ERROR'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_REQUEST = 'USER_REQUEST'

export const userRequest = () => ({
    type: USER_REQUEST,
})

export const userSuccess = (data) => ({
    type: USER_SUCCESS,
    payload: data,
})

export const userFailure = (error) => ({
    type: USER_ERROR,
    payload: error,
})

export const getUser = (url) => async (dispatch) => {
    dispatch(userRequest())
    try {
        const result = await request(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('accessToken'),
            },
        })

        dispatch(userSuccess(result))
        return result
    } catch (error) {
        dispatch(userFailure(error.message))
    }
}

export const patchUser = (url, user) => async (dispatch) => {
    getToken()
    dispatch(userRequest())
    try {
        const result = await request(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + getCookie('accessToken'),
            },
            body: JSON.stringify(user),
        })

        dispatch(userSuccess(result))
        return result
    } catch (error) {
        dispatch(userFailure(error.message))
    }
}
