import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../services/reducers/fetchData'

export const fetchDataAction = (url) => async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Ошибка fetch(url)");
        }
        const jsonData = await response.json();
        dispatch(fetchDataSuccess(jsonData.data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};