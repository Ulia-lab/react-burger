import React from "react";
import PropTypes from 'prop-types';
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { propTypesCard } from '../../utils/prop-types'
import { useDrag } from "react-dnd";

const ConstructorCard = ({ card, isLocked, additionalName = '' }) => {
    const [, dragRef] = useDrag({
        type: "elements",
        item: { card },
    });
    const handleDrag = card.type !== 'bun' ? dragRef : null;
    return (
        <div ref={handleDrag} className={cn('mb-4', burgerConstructorStyle.element)}>
            {!isLocked && <DragIcon type="primary" />}
            <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
                <ConstructorElement
                    type={card.type}
                    isLocked={isLocked}
                    text={`${card.name}${additionalName}`}
                    price={card.price}
                    thumbnail={card.image} />
            </div>
        </div>)
};


export default ConstructorCard;

ConstructorCard.propTypes = {
    card: propTypesCard,
    isLocked: PropTypes.bool,
    additionalName: PropTypes.string,
};