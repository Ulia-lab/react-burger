import React, { useMemo } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import Modal from '../Modal';
import OrderDetails from './OrderDetails';
import ConstructorCard from './constructorCard';
import { v4 as uuidv4 } from 'uuid';
import { postOrder } from "../../utils/postOrder";
import { ORDER_URL } from '../../utils/constants'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postOrderModal } from '../../services/reducers/postOrder';

function BurgerConstructor() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.constructorItems.items);

    const isOpen = useSelector(state => state.postOrder.isOpen);
    const loading = useSelector(state => state.postOrder.loading);
    const error = useSelector(state => state.postOrder.error);
    const orderNum = useSelector(state => state.postOrder.items);

    const isLocked = true;
    const totalPrice = useMemo(() => data.reduce((acc, card) => acc + card.price, 0), [data]);

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
        return data.reduce((acc, card) => {
            acc.ingredients.push(card._id);

            return acc;
        }, { ingredients: [] })
    }, [data]);
    
    const handleOpenModal = async () => {
        dispatch(postOrder(ORDER_URL, orderId));
    }

    const handleCloseModal = () => {
        dispatch(postOrderModal());
    }

    if (loading) {
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
            {isOpen && <Modal content={<OrderDetails order={orderNum} />} closeModal={handleCloseModal} />}
        </>
    );
}

export default BurgerConstructor;