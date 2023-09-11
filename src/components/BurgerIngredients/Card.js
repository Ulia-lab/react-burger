import React, { useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import { propTypesCard } from '../../utils/prop-types'
import { Link, useLocation } from "react-router-dom";

const Card = ({ card }) => {
    const location = useLocation();

    const handleOpenModal = () => {
        localStorage.setItem('openModalCard', true);
    }

    const constructorCards = useSelector(state => state.constructorItems.items);
    const count = useMemo(() => constructorCards.filter(item => item._id === card._id).length, [card._id, constructorCards]);

    //dnd
    const [, dragRef] = useDrag({
        type: "item",
        item: { card },
    });

    return (
        <div ref={dragRef}>
            <button onClick={handleOpenModal} className={burgerIngredientsStyle.card}> 
            <Link to={`/ingredients/${card._id}`}  state={{ background: location }}>
                {count !== 0 && <div className={burgerIngredientsStyle.counter}><Counter count={count} size="default" extraClass="m-1" /></div>}
                <img alt={card.name} src={card.image} card={card} className="ml-4 mr-4 mb-1" />
                <div className={burgerIngredientsStyle.price}>
                    <p className="text text_type_digits-default">{card.price}</p>
                    <div className="ml-1">
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
                <p className={cn('text text_type_main-small mt-1', burgerIngredientsStyle.name)}>{card.name}</p>
            </Link>
            </button>
        </div>
    )
};


export default Card;

Card.propTypes = {
    card: propTypesCard
}; 