import React, { useMemo, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import CardsList from "./CardsList.js";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import { useSelector } from 'react-redux';

function BurgerIngredients() {
    const data = useSelector(state => state.fetchData.data);

    const result = useMemo(() => data.reduce((acc, item) => {
        acc[item.type].push(item);
        return acc;
    }, { bun: [], sauce: [], main: [] }), [data]);

    const buns = result.bun;
    const sauces = result.sauce;
    const mains = result.main;

    const setCurrent = function () { return }

    const [active, setActive] = useState('Булки');

    const handleScroll = (event) => {
        const element = event.target;
        const { scrollTop, offsetHeight } = element;

        const index = Math.floor((scrollTop + offsetHeight / 2) / offsetHeight);

        if (index === 0) {
            setActive('Булки');
        } else if (index === 1) {
            setActive('Соусы');
        } else if (index === 2) {
            setActive('Начинки');
        }
    };

    return (
        <section className={cn('mt-10 mr-10', burgerIngredientsStyle.block)}>
            <h1 className={cn('text text_type_main-large', burgerIngredientsStyle.title)}>Соберите бургер</h1>
            <div className={cn('mt-5 mb-6', burgerIngredientsStyle.tabs)}>
                <Tab value="Булки" active={active} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={active} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={active} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div onScroll={handleScroll} className={burgerIngredientsStyle.cardListBlock}>
                <CardsList cardsTitle="Булки" cards={buns} />
                <CardsList cardsTitle="Соусы" cards={sauces} />
                <CardsList cardsTitle="Начинки" cards={mains} />
            </div>
        </section>
    );
};

export default BurgerIngredients;