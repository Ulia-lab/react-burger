import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../services/actions/fetchData'
import { getCookie } from './getCookie';

export const fetchDataAction = (url) => async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + getCookie("accessToken")
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
          });
        if (!response.ok) {
            throw new Error("Ошибка fetch(url)");
        }
        const jsonData = await response.json();
        dispatch(fetchDataSuccess(jsonData.data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};