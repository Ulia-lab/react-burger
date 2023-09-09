import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "../actions/signUp";

const initialState = {
    loading: false,
    error: false,
    success: null,
    user: {
        email: "",
        name: ""
    },
    accessToken: "",
    refreshToken: ""
};

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case SIGN_UP_SUCCESS: {
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
        case SIGN_UP_ERROR: {
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