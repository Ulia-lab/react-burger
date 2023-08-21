import { ADD_BC_ITEMS, REMOVE_BC_ITEMS } from "../actions/constructorItems";
import { items } from '../../utils/items'
const initialState = {
    items: [items[0], items[1], items[2]]
};

export const constructorItemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_BC_ITEMS: {
            return {
                ...state,
                items: {...state.items.push(action.items)}
            }
        }
        case REMOVE_BC_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }
        default: {
            return state;
        }
    }
} 

export const addBCItems = () => ({
    type: ADD_BC_ITEMS,
});

export const removeBCItems = () => ({
    type: REMOVE_BC_ITEMS,
});