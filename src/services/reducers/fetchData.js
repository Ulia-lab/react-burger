import { FETCH_DATA_REQUEST } from "../actions/fetchData";
import { FETCH_DATA_SUCCESS } from "../actions/fetchData";
import { FETCH_DATA_FAILURE } from "../actions/fetchData";

const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };