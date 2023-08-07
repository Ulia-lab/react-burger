import React from "react";
import Card from "./Card.js";
import PropTypes from 'prop-types';
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import { v4 as uuidv4 } from 'uuid';

const CardsList = ({ cardsTitle, cards }) => {
    return (
        <div className={cn('mb-10 ml-4 mr-4', burgerIngredientsStyle.cardsList)}>
            <h2 className={burgerIngredientsStyle.cardTitle}>
                {cardsTitle}
            </h2>
            {cards.map((card) => (
                <Card key={uuidv4()} card={card} />
            ))}
        </div>
    )
};


export default CardsList;

CardsList.propTypes = {
    cardsTitle: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}; 