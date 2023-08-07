import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import CardsList from "./CardsList.js";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import PropTypes from 'prop-types';

function BurgerIngredients({data}) {

    const result = data.reduce((acc, item) => {
        acc[item.type].push(item);
        return acc;
    }, { bun: [], sauce: [], main: [] });

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
    data: PropTypes.array.isRequired,
}; 

export default BurgerIngredients;