import { ADD_BC_ITEMS, REMOVE_BC_ITEMS, UPDATE_TYPE, MOVE_ITEM } from "../actions/constructorItems";

const initialState = {
    items: [],
};

export const constructorItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BC_ITEMS: {
            if (action.items.type === 'bun') {
                return { ...state.items.unshift(action.items) };
            }
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
            const item = action.item;
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