import React from "react";
import IngredientDetails from "./IngredientDetails";
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getIngredient } from "../../utils/getIng";
import { closeCardModal } from "../../services/actions/modalngredients.js";
import { propTypesCard } from "../../utils/prop-types";

const CardModal = () => {
    const dispatch = useDispatch();
    //@ts-ignore
    const fetchData = useSelector(state => state?.fetchData?.data) || null;

    const navigate = useNavigate();
    const { state } = useLocation();

    let { id } = useParams();
    let card: propTypesCard = getIngredient(fetchData, id);

    const handleCloseModal = () => {
        navigate(state.background.pathname, { replace: true });
        localStorage.removeItem('modalIngredientCard')
        dispatch(closeCardModal())
    }
    
    return (
        //@ts-ignore
        <Modal content={<IngredientDetails card={card} />} closeModal={handleCloseModal} />
    )
};


export default CardModal;
