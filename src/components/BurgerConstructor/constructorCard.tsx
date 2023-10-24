import React from "react";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { useDrag } from "react-dnd";
import { removeBCItems } from '../../services/actions/constructorItems';
import { useDispatch } from 'react-redux';
import { ConstructorCardProps } from "./interfaces";

const ConstructorCard = ({ type, index, card, isLocked, additionalName = '' }: ConstructorCardProps) => {
    const dispatch = useDispatch();

    const [{ isDragging }, dragRef] = useDrag({
        type: 'card',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.5 : 1;

    const handleDrag = card.type !== 'bun' ? dragRef : null;

    const handleRemoveBCItem = (_id: string) => {
        dispatch(removeBCItems(_id));
    }
    return (
        <div ref={handleDrag} className={cn('mb-4', burgerConstructorStyle.element)} style={{ opacity }}>
            {!isLocked && <DragIcon type="primary" />}
            <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
                <ConstructorElement
                    handleClose={() => handleRemoveBCItem(card._id)}
                    type={type}
                    isLocked={isLocked}
                    text={`${card.name}${additionalName}`}
                    price={card.price}
                    thumbnail={card.image} />
            </div>
        </div>)
};


export default ConstructorCard;
