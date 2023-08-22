import React, { useMemo, useContext, useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import Modal from '../Modal';
import OrderDetails from './OrderDetails';
import ConstructorCard from './constructorCard';
import { v4 as uuidv4 } from 'uuid';
import { BurgerContext } from '../../services/BurgerContext';
import postOrder from "../../utils/postOrder";
import { ORDER_URL } from '../../utils/constants'

function BurgerConstructor() {
    const data = useContext(BurgerContext);

    const isLocked = true;
    const totalPrice = useMemo(() => data.reduce((acc, card) => acc + card.price, 0), [data]);

    const [openIngredientDetails, setIngredientDetails] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState();
    const [order, setOrder] = useState(null);

    const handleOpenModal = async () => {
        await postOrder({ url: ORDER_URL, orderId: orderId, setOrder: setOrder, setIsLoading: setIsLoading, setError: setError });
        setIngredientDetails(true);
    }

    const bunType = 'bun';

    const bunCards = useMemo(() => {
        const bun = data.find(item => item.type === bunType)
        return bun;
    }, [data]);

    const cards = useMemo(() => {
        const bun = data.filter(item => (item.type !== bunType))
        return bun;
    }, [data]);

    const orderId = useMemo(() => {
        return cards.reduce((acc, card) => {
            acc.ingredients.push(card._id);

            return acc;
        }, { ingredients: [] })
    }, [cards]);

    if (isLoading) {
        return <div>Загрузка...</div>
    }

    if (error) {
        return <div>Ошибка: {error}</div>
    }

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
            {openIngredientDetails && <Modal content={<OrderDetails order={order} />} setIngredientDetails={setIngredientDetails} />}
        </>
    );
}

export default BurgerConstructor;