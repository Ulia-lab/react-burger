import { POST_PASSWORD_RESET_REQUEST } from "../actions/postPasswordReset";
import { POST_PASSWORD_RESET_SUCCESS } from "../actions/postPasswordReset";
import { POST_PASSWORD_RESET_ERROR } from "../actions/postPasswordReset";
import { PASSWORD_SET_INITIAL_STATE } from "../actions/postPasswordReset";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const postPasswordResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PASSWORD_RESET_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_PASSWORD_RESET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PASSWORD_SET_INITIAL_STATE:
      return initialState;

    default:
      return state;
  }
};