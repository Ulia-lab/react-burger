import React, { useMemo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import CardsList from "./CardsList.js";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import PropTypes from 'prop-types';

function BurgerIngredients({ data }) {

    const result  = useMemo(() => data.reduce((acc, item) => {
        acc[item.type].push(item);
        return acc;
    }, { bun: [], sauce: [], main: [] }), [data]);

    const buns = result.bun;
    const sauces = result.sauce;
    const mains = result.main;

    const setCurrent = function () { return }
    return (
        <section className={cn('mt-10 mr-10', burgerIngredientsStyle.block)}>
            <h1 className={cn('text text_type_main-large', burgerIngredientsStyle.title)}>Соберите бургер</h1>
            <div className={cn('mt-5 mb-6', burgerIngredientsStyle.tabs)}>
                <Tab value="Булки" active='true' onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active='false' onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active='false' onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={burgerIngredientsStyle.cardListBlock}>
                <CardsList cardsTitle="Булки" cards={buns} />
                <CardsList cardsTitle="Соусы" cards={sauces} />
                <CardsList cardsTitle="Начинки" cards={mains} />
            </div>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
};

export default BurgerIngredients;