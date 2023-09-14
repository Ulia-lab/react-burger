import { v4 as uuidv4 } from 'uuid';

export const ADD_BC_ITEMS = 'ADD_BC_ITEMS';
export const REMOVE_BC_ITEMS = 'REMOVE_BC_ITEMS';
export const UPDATE_TYPE = 'UPDATE_TYPE';
export const MOVE_ITEM = 'MOVE_ITEM';

export const addBCItems = (item) => ({
    type: ADD_BC_ITEMS,
    payload: {
        ...item, // используем `spread`, чтобы поменять ссылку на объект. Таким образом `redux` обновит его в хранилище
        uniqueId: uuidv4()  // и добавляем в объект новое поле, которое потом будет использовано в `key`
    }
});

export const removeBCItems = (_id) => ({
    type: REMOVE_BC_ITEMS,
    _id
});

export const moveItem = (dragIndex, hoverIndex) => ({
    type: MOVE_ITEM,
    payload: { dragIndex, hoverIndex }
})
