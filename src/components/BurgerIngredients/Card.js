import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import PropTypes from 'prop-types';
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import IngredientDetails from './IngredientDetails/index.js';
import Modal from '../Modal';

const Card = ({ card }) => {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState(null);

    const handleOpenModal = (e) => {
        setVisible(true);
        setData(e.target)
    }

    return (
    <><button onClick={(e) => handleOpenModal(e)} className={burgerIngredientsStyle.card}>
            <img alt={card.name} src={card.image} card={card} className="ml-4 mr-4 mb-1" />
            <div className={burgerIngredientsStyle.price}>
                <p className="text text_type_digits-default">{card.price}</p>
                <div className="ml-1">
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            <p className={cn('text text_type_main-small mt-1', burgerIngredientsStyle.name)}>{card.name}</p>
        </button>
        <Modal visible={visible} content={visible && <IngredientDetails card={card}  />} />
    </>
)};


export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
  }; 