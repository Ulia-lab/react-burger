import { ADD_BC_ITEMS, REMOVE_BC_ITEMS, UPDATE_TYPE } from "../actions/constructorItems";
import { items } from '../../utils/items'
const initialState = {
    items: [items[0], items[1], items[2]]
};

export const constructorItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BC_ITEMS: {
            return {
                ...state,
                items: { ...state.items.push(action.items) }
            }
        }
        case REMOVE_BC_ITEMS: {
            const newState = [...state.items];
            const index = newState.findIndex(item => item._id === action._id);
            if (index !== -1) {
                newState.splice(index, 1);
            }
            return {
                ...state,
                items: newState
            }
        }
        case UPDATE_TYPE: {
            if (action.item.type === 'bun') {
                const bunIndex = state.items.findIndex(item => item.type === 'bun');
                if (bunIndex !== -1) {
                    state.items.splice(bunIndex, 1);
                }
            }
            return {
                ...state,
                items: [...state.items, action.item]
            };
        }
        default: {
            return state;
        }
    }
}

export const addBCItems = () => ({
    type: ADD_BC_ITEMS,
});

export const removeBCItems = (_id) => ({
    type: REMOVE_BC_ITEMS,
    _id
});