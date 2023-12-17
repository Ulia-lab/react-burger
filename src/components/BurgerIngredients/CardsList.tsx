import React from "react";
import Card from "./Card";
import burgerIngredientsStyle from "./burgerIngredients.module.css";
import cn from "classnames";
import { CardsListProps } from "./interfaces";

const CardsList = ({ cardsTitle, cards }: CardsListProps) => {
  return (
    <div className={cn("mb-10 ml-4 mr-4", burgerIngredientsStyle.cardsList)}>
      <h2 className={burgerIngredientsStyle.cardTitle}>
        {cardsTitle}
      </h2>
      {cards.map((card) => (
        <Card key={card.uniqueId} card={card} />
      ))}
    </div>
  );
};

export default CardsList;
