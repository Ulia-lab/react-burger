import React from "react";
import IngredientDetails from './IngredientDetails/index.js';
import Modal from '../Modal';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getIngredient } from "../../utils/getIng";

const CardModal = () => {
    const fetchData = useSelector(state => state?.fetchData?.data) || null;

    let { id } = useParams();
    let card = getIngredient(fetchData, id);

    const handleCloseModal = () => {
        localStorage.removeItem('openModalCard');
        window.location.href = '/'

    }
    return (
    <Modal content={<IngredientDetails card={card} />} closeModal={handleCloseModal} />
    )
};


export default CardModal;
