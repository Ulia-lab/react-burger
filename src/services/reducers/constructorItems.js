import { ADD_BC_ITEMS, REMOVE_BC_ITEMS, MOVE_ITEM, GET_SAVED_BC_ITEMS, CLEAR_ALL_BC_ITEMS } from "../actions/constructorItems";

const initialState = {
    items: [],
};

export const constructorItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BC_ITEMS: {
            const item = action.payload;
            if (item.type === 'bun') {
                const bunIndex = state.items.findIndex(item => item.type === 'bun');
                if (bunIndex !== -1) {
                    state.items.splice(bunIndex, 1);
                }
                return {
                    ...state,
                    items: [item, ...state.items]
                };
            }
            return {
                ...state,
                items: [...state.items, item]
            };
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
        case GET_SAVED_BC_ITEMS: {
            if (action.items) return {
                ...state,
                items: action.items
            }
            return state
        }
        case CLEAR_ALL_BC_ITEMS: {
            return initialState
        }
        case MOVE_ITEM:
            const { dragIndex, hoverIndex } = action.payload;
            const newDragIndex = dragIndex + 1;
            const newHoverIndex = hoverIndex + 1;

            const { items } = state;
            const updatedItems = [...items];
            const item1 = updatedItems[newDragIndex];
            const item2 = updatedItems[newHoverIndex];
            updatedItems.splice(newDragIndex, 1, item2);
            updatedItems.splice(newHoverIndex, 1, item1);

            return { ...state, items: updatedItems };
        default: {
            return state;
        }
    }
}