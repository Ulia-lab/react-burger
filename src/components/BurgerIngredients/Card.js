import React from "react";
import "./styles.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const Card = ({ card }) => (
    <button className="card">
        <img alt={card.name} src={card.image} className="ml-4 mr-4 mb-1" />
        <div className="card-price">
            <p className="text text_type_digits-default">{card.price}</p>
            <div className="ml-1">
                <CurrencyIcon type="primary" />
            </div>
        </div>
        <p className="text text_type_main-small card-name mt-1">{card.name}</p>
    </button>
);


export default Card;