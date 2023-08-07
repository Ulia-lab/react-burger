import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'
import Modal from '../Modal';
import { v4 as uuidv4 } from 'uuid';
import OrderDetails from './OrderDetails';
import PropTypes from 'prop-types';

function BurgerConstructor({data}) {
    const isLocked = true;
    const totalPrice = data.reduce((acc, card) => acc + card.price, 0);

    const [visible, setVisible] = React.useState(false);
    const handleOpenModal = () => {
        setVisible(true);
    }
  
    return (
        <><section className={cn('mt-25', burgerConstructorStyle.block)}>
            <div className={cn('ml-4', burgerConstructorStyle.bconstructor)}>
                {data.map((card) => (
                    <div key={uuidv4()} className={cn('mb-4', burgerConstructorStyle.element)}>
                        {isLocked && <DragIcon type="primary" />}
                        <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
                            <ConstructorElement
                                type={card.type}
                                isLocked={isLocked}
                                text={card.name}
                                price={card.price}
                                thumbnail={card.image} />
                        </div>
                    </div>
                ))}
            </div>
            <div className={cn('mt-10 ml-4 mr-4', burgerConstructorStyle.total)}>
                <p className="text text_type_digits-default">{totalPrice}</p>
                <div className="mr-10 ml-2"><CurrencyIcon type="primary" /></div>
                <Button onClick={handleOpenModal} htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
        <Modal visible={visible} content={visible && <OrderDetails />} />
        </> 
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired,
}; 

export default BurgerConstructor;