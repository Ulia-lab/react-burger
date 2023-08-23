export const GET_BI_MODAL_ITEM = 'GET_BI_MODAL_ITEM';
export const REMOVE_BI_MODAL_ITEM = 'REMOVE_BI_MODAL_ITEM';

export const openCardModal = (card) => ({
    type: GET_BI_MODAL_ITEM,
    payload: card
});

export const closeCardModal = () => ({
    type: REMOVE_BI_MODAL_ITEM,
    payload: {},
    isOpen: false
});