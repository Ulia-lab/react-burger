import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import PropTypes from 'prop-types';
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'

const Card = ({ card }) => (
    <button className={burgerIngredientsStyle.card}>
        <img alt={card.name} src={card.image} className="ml-4 mr-4 mb-1" />
        <div className={burgerIngredientsStyle.price}>
            <p className="text text_type_digits-default">{card.price}</p>
            <div className="ml-1">
                <CurrencyIcon type="primary" />
            </div>
        </div>
        <p className={cn('text text_type_main-small mt-1', burgerIngredientsStyle.name)}>{card.name}</p>
    </button>
);


export default Card;

Card.propTypes = {
    card: PropTypes.array.isRequired,
  }; 