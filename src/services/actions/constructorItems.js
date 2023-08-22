export const ADD_BC_ITEMS = 'ADD_BC_ITEMS';
export const REMOVE_BC_ITEMS = 'REMOVE_BC_ITEMS';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const MOVE_ITEM = 'MOVE_ITEM';

export const addBCItems = () => ({
    type: ADD_BC_ITEMS,
});

export const removeBCItems = (_id) => ({
    type: REMOVE_BC_ITEMS,
    _id
});

export const moveItem = (dragIndex, hoverIndex) => ({
    type: MOVE_ITEM,
    payload: { dragIndex, hoverIndex }
})
