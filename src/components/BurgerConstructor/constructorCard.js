import React from "react";
import PropTypes from 'prop-types';
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const ConstructorCard = ({ card, isLocked, additionalName='' }) => (
    <div className={cn('mb-4', burgerConstructorStyle.element)}>
        {isLocked && <DragIcon type="primary" />}
        <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
            <ConstructorElement
                type={card.type}
                isLocked={isLocked}
                text={`${card.name}${additionalName}`}
                price={card.price}
                thumbnail={card.image} />
        </div>
    </div>
);


export default ConstructorCard;

ConstructorCard.propTypes = {
    card: PropTypes.shape({
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
    }),
    isLocked: PropTypes.bool,
    additionalName: PropTypes.string,
}; 