import { POST_ORDER_ERROR, POST_ORDER_SUCCESS, POST_ORDER_REQUEST, REMOVE_ORDER_MODAL_ITEM } from "../actions/postOrder";

const initialState = {
    items: {
        name: '',
        order: {
            number: 0,
        },
        success: true
    },
    isOpen: false,
    loading: false,
    error: null,
};

export const postOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ORDER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case POST_ORDER_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null,
                isOpen: true,
            }
        }
        case POST_ORDER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        case REMOVE_ORDER_MODAL_ITEM: {
            return {
                ...state,
                selectedCard: {},
                isOpen: false
            }
        }
        default: {
            return state;
        }
    }
}

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
