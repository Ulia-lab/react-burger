import { GET_BI_MODAL_ITEM, REMOVE_BI_MODAL_ITEM } from "../actions/modalngredients";

const initialState = {
    selectedCard: {},
    isOpen: false
};

export const modalIngredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BI_MODAL_ITEM: {
            return {
                ...state,
                selectedCard: action.payload,
                isOpen: true
            }
        }
        case REMOVE_BI_MODAL_ITEM: {
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

export const openCardModal = (card) => ({
    type: GET_BI_MODAL_ITEM,
    payload: card
});

export const closeCardModal = () => ({
    type: REMOVE_BI_MODAL_ITEM,
    payload: {},
    isOpen: false
});