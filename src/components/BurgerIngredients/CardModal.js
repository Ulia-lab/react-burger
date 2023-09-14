import React from "react";
import IngredientDetails from './IngredientDetails/index.js';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getIngredient } from "../../utils/getIng";
import { closeCardModal } from "../../services/actions/modalngredients.js";

const CardModal = () => {
    const dispatch = useDispatch();
    const fetchData = useSelector(state => state?.fetchData?.data) || null;

    let { id } = useParams();
    let card = getIngredient(fetchData, id);

    const handleCloseModal = () => {
        dispatch(closeCardModal())
    }

    return (
        <Modal content={<IngredientDetails card={card} />} closeModal={handleCloseModal} />
    )
};


export default CardModal;
