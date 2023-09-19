import { USER_REQUEST } from "../actions/user";
import { USER_SUCCESS } from "../actions/user";
import { USER_ERROR } from "../actions/user";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};