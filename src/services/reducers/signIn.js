import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../actions/signIn";

const initialState = {
    loading: false,
    error: false,
    success: null,
};

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case SIGN_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                user: {
                    email: action.payload.user.email,
                    name: action.payload.user.name
                },
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            }
        }
        case SIGN_IN_ERROR: {
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