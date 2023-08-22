export const ADD_BC_ITEMS = 'ADD_BC_ITEMS';
export const REMOVE_BC_ITEMS = 'REMOVE_BC_ITEMS';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const CHANGE_ORDER_ELEMENTS = 'CHANGE_ORDER_ELEMENTS';

export const addBCItems = () => ({
    type: ADD_BC_ITEMS,
});

export const removeBCItems = (_id) => ({
    type: REMOVE_BC_ITEMS,
    _id
});
