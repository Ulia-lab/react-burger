import React, { useMemo, useContext } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import Modal from '../Modal';
import OrderDetails from './OrderDetails';
import PropTypes from 'prop-types';
import ConstructorCard from './constructorCard';
import { v4 as uuidv4 } from 'uuid';
import { BurgerConstructorContext } from '../../services/BurgerConstructorContext';

function BurgerConstructor() {
    const data = useContext(BurgerConstructorContext);

    const isLocked = true;
    const totalPrice = useMemo(() => data.reduce((acc, card) => acc + card.price, 0), [data]);

    const [openIngredientDetails, setIngredientDetails] = React.useState(false);
    const handleOpenModal = () => {
        setIngredientDetails(true);
    }

    const bunCards = useMemo(() => {
        const bun = data.find(item => item.type === "bun")
        return bun;
    }, [data]);

    const cards = useMemo(() => {
        const bun = data.filter(item => (item.type !== "bun"))
        return bun;
    }, [data]);

    const orderId = useMemo(() => {
        return cards.reduce((acc, card) => {
            acc.ingredients.push(card._id);

            return acc;
        }, { ingredients: [] })
    }, [cards]);

    return (
        <><section className={cn('mt-25', burgerConstructorStyle.block)}>
            <div className={cn('ml-4', burgerConstructorStyle.bconstructor)}>
                {bunCards && <ConstructorCard card={bunCards} isLocked={isLocked} additionalName=' (верх)' />}
                {cards.map((card) => (
                    <ConstructorCard key={uuidv4()} card={card} isLocked={isLocked} />
                ))}
                {bunCards && <ConstructorCard card={bunCards} isLocked={isLocked} additionalName=' (низ)' />}
            </div>
            <div className={cn('mt-10 ml-4 mr-4', burgerConstructorStyle.total)}>
                <p className="text text_type_digits-default">{totalPrice}</p>
                <div className="mr-10 ml-2"><CurrencyIcon type="primary" /></div>
                <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
            {openIngredientDetails && <Modal content={<OrderDetails orderId={orderId} />} setIngredientDetails={setIngredientDetails} />}
        </>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
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
    }))
};

export default BurgerConstructor;