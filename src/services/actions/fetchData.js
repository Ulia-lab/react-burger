import { request } from "../../utils/request";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const fetchDataAction = (url) => async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const result = await request(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        });
        dispatch(fetchDataSuccess(result.data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};