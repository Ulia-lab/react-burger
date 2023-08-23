import {initialState} from '../reducers/postOrder'
export const POST_ORDER_ERROR = 'POST_ORDER_ERROR';
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS';
export const POST_ORDER_REQUEST = 'POST_ORDER_REQUEST';
export const REMOVE_ORDER_MODAL_ITEM = 'REMOVE_ORDER_MODAL_ITEM';

export const postOrderRequest = () => ({
    type: POST_ORDER_REQUEST,
});

export const postOrderSuccess = (data) => ({
    type: POST_ORDER_SUCCESS,
    payload: data,
    isOpen: true,
});

export const postOrderFailure = (error) => ({
    type: POST_ORDER_ERROR,
    payload: error,
});

export const postOrderModal = () => ({
    type: REMOVE_ORDER_MODAL_ITEM,
    payload: initialState,
    isOpen: false,
});