import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import "./styles.css";
import CardsList from "./CardsList.js";
import data from '../../utils/data'

function BurgerIngredients() {

    const result = data.reduce((acc, item) => {
        acc[item.type].push(item);
        return acc;
    }, { bun: [], sauce: [], main: [] });

    const buns = result.bun;
    const sauces = result.sauce;
    const mains = result.main;

    const setCurrent = function () { return }
    return (
        <section className="ingredients-block mt-10 mr-10">
            <h1 className="text text_type_main-large title">Соберите бургер</h1>
            <div className="tabs mt-5 mb-6">
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
            <div className="card-list-block">
                <CardsList cardsTitle="Булки" cards={buns} />
                <CardsList cardsTitle="Соусы" cards={sauces} />
                <CardsList cardsTitle="Начинки" cards={mains} />
            </div>
        </section>
    );
}


export default BurgerIngredients;