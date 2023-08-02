import React from "react";
import "./styles.css";
import Card from "./Card.js";

const CardsList = ({ cardsTitle, cards }) => (
    <div className="mb-10 ml-4 mr-4 cardsList">
        <h2 className="cardTitle">
            {cardsTitle}
        </h2>
        {cards.map((card) => (
            <Card card={card} />
        ))}    
    </div>
);


export default CardsList;