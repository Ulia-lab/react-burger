import { ADD_BC_ITEMS, REMOVE_BC_ITEMS, UPDATE_TYPE } from "../actions/constructorItems";
const initialState = {
    items: []
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