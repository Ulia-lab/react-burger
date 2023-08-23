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
import { postOrderModal } from '../../services/actions/postOrder';
import { useDrop } from 'react-dnd';
import { UPDATE_TYPE } from '../../services/actions/constructorItems';
import { DropZone } from './DropZone'

function BurgerConstructor() {
    const bunType = 'bun';

    const dispatch = useDispatch();

    const cards = useSelector(state => state.constructorItems.items);

    const isOpen = useSelector(state => state.postOrder.isOpen);
    const loading = useSelector(state => state.postOrder.loading);
    const error = useSelector(state => state.postOrder.error);
    const orderNum = useSelector(state => state.postOrder.items);

    const isLocked = true;
    const totalPrice = useMemo(() => {
        return cards.reduce((acc, card) => {
            const price = card.type === bunType ? (card.price * 2) : card.price;
            return acc + price
        }, 0)
    }, [cards]);

    const bunCards = useMemo(() => {
        const bun = cards.find(item => item.type === bunType)
        return bun;
    }, [cards]);

    const mainCards = useMemo(() => {
        const bun = cards.filter(item => (item.type !== bunType))
        return bun;
    }, [cards]);

    const orderId = useMemo(() => {
        return cards.reduce((acc, card) => {
            acc.ingredients.push(card._id);

            return acc;
        }, { ingredients: [] })
    }, [cards]);

    const handleOpenModal = async () => {
        dispatch(postOrder(ORDER_URL, orderId));
    }

    const handleCloseModal = () => {
        dispatch(postOrderModal());
    }

    //dnd
    const [, dropItem] = useDrop({
        accept: "item",
        drop(itemId) {
            dispatch({
                type: UPDATE_TYPE,
                item: itemId.card,
            });
        },
    });

    if (loading) {
        return <div>Загрузка...</div>
    }

    if (error) {
        return <div>Ошибка: {error}</div>
    }

    return (
        <><section className={cn('mt-25', burgerConstructorStyle.block)}>
            <div ref={dropItem} className={cn('ml-4', burgerConstructorStyle.bconstructor)}>
                {(cards.length === 0) ? <div className="text text_type_digits-default" style={{height: "100%", wight: "100%"}} >Перетащите элементы бургера</div> : 
                <div className={cn('ml-4', burgerConstructorStyle.bconstructorActive)}>
                    {bunCards && <ConstructorCard card={bunCards} isLocked={isLocked} additionalName=' (верх)' />}
                    {mainCards.map((card, index) => (
                        <DropZone key={index} index={index}>
                            <ConstructorCard index={index} key={uuidv4()} card={card} />
                        </DropZone>
                    ))}
                    {bunCards && <ConstructorCard card={bunCards} isLocked={isLocked} additionalName=' (низ)' />}
                </div>}
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