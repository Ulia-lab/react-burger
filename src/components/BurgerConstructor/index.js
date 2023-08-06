import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import data from '../../utils/data'
import burgerConstructorStyle from "./burgerConstructor.module.css";
import cn from 'classnames'

function BurgerConstructor() {
    const isLocked = true;
    const totalPrice = data.reduce((acc, card) => acc + card.price, 0);
    return (
        <section className={cn('mt-25', burgerConstructorStyle.block)}>
            <div className={cn('ml-4', burgerConstructorStyle.bconstructor)}>
                {data.map((card) => (
                    <div className={cn('mb-4', burgerConstructorStyle.element)}>
                        {isLocked && <DragIcon type="primary" />}
                        <div className={cn('ml-2 mr-2', burgerConstructorStyle.item)}>
                            <ConstructorElement
                                type={card.type}
                                isLocked={isLocked}
                                text={card.name}
                                price={card.price}
                                thumbnail={card.image}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className={cn('mt-10 ml-4 mr-4', burgerConstructorStyle.total)}>
                <p className="text text_type_digits-default">{totalPrice}</p>
                <div className="mr-10 ml-2"><CurrencyIcon type="primary" /></div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    );
}


export default BurgerConstructor;