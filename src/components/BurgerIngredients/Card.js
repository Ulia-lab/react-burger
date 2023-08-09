import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import PropTypes from 'prop-types';
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import IngredientDetails from './IngredientDetails/index.js';
import Modal from '../Modal';

const Card = ({ card }) => {
    const [openIngredientDetails, setIngredientDetails] = React.useState(false);

    const handleOpenModal = () => {
        setIngredientDetails(true);
    }

    return (
        <><button onClick={() => handleOpenModal()} className={burgerIngredientsStyle.card}>
            <img alt={card.name} src={card.image} card={card} className="ml-4 mr-4 mb-1" />
            <div className={burgerIngredientsStyle.price}>
                <p className="text text_type_digits-default">{card.price}</p>
                <div className="ml-1">
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <p className={cn('text text_type_main-small mt-1', burgerIngredientsStyle.name)}>{card.name}</p>
        </button>
        { openIngredientDetails && <Modal content={<IngredientDetails card={card} />} setIngredientDetails={setIngredientDetails}/> }
        </>
    )
};


export default Card;

Card.propTypes = {
    card: PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
    })
}; 