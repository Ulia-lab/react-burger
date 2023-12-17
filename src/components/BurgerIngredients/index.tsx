import React, { useMemo, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/tab";
import CardsList from "./CardsList";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from 'classnames'
import { useSelector } from 'react-redux';

function BurgerIngredients() {
    const bunRef = useRef<null | HTMLDivElement>(null);
    const saucesRef = useRef<null | HTMLDivElement>(null);
    const mainsRef = useRef<null | HTMLDivElement>(null);

    //@ts-ignore
    const data = useSelector(state => state.fetchData.data);

    //@ts-ignore
    const result = useMemo(() => data.reduce((acc, item) => {
        acc[item.type].push(item);
        return acc;
    }, { bun: [], sauce: [], main: [] }), [data]);

    const buns = result.bun;
    const sauces = result.sauce;
    const mains = result.main;

    function handleScrollToBun() {
        setActive('Булки');
        bunRef.current?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      }
    
      function handleScrollToSauces() {
        setActive('Соусы');
        saucesRef.current?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      }
    
      function handleScrollToMains() {
        setActive('Начинки');
        mainsRef.current?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      }

    const [active, setActive] = useState('Булки');

    console.log(active)
    const handleScroll = (event: { target: any; }) => {
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
                <Tab value="Булки" active={active === 'Булки'} onClick={handleScrollToBun}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={active === 'Соусы'} onClick={handleScrollToSauces}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={active === 'Начинки'} onClick={handleScrollToMains}>
                    Начинки
                </Tab>
            </div>
            <div onScroll={handleScroll} className={burgerIngredientsStyle.cardListBlock}>
                <div ref={bunRef}>
                    <CardsList cardsTitle="Булки" cards={buns} />
                </div>
                <div ref={saucesRef}>
                    <CardsList cardsTitle="Соусы" cards={sauces} />
                </div>
                <div ref={mainsRef}>
                    <CardsList cardsTitle="Начинки" cards={mains} />
                </div>
            </div>
        </section>
    );
};

export default BurgerIngredients;