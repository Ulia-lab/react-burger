import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_LOGOUT_SUCCESS, AUTH_ERROR } from "../actions/auth";

const initialState = {
    loading: false,
    error: false,
    success: null,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case AUTH_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
            }
        }
        case AUTH_LOGOUT_SUCCESS: {
            return {
                ...state,
                initialState,
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }
        default: {
            return state;
        }
    }
} 