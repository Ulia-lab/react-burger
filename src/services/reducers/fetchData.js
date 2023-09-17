import { FETCH_DATA_REQUEST } from '../actions/fetchData'
import { FETCH_DATA_SUCCESS } from '../actions/fetchData'
import { FETCH_DATA_FAILURE } from '../actions/fetchData'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_DATA_SUCCESS:
            const cards = action.payload.map((card) => {
                card.uniqueId = uuidv4()
                return card
            })
            return {
                ...state,
                loading: false,
                data: cards,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
