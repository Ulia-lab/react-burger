import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/button";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import data from '../../utils/data'
import "./styles.css";

class BurgerConstructor extends React.Component {
    render() {
        const isLocked = true;
        return (
            <section className="burger-constructor-block mt-25">
                <div className="burger-constructor ml-4">
                    {data.map((card) => (
                        <div className="burger-constructor-element mb-4">
                            {isLocked && <DragIcon type="primary" />}
                            <div className="burger-constructor-item ml-2 mr-2">
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
                <div className="mt-10 ml-4 mr-4 total">
                    <p className="text text_type_digits-default">610</p>
                    <div className="mr-10 ml-2"><CurrencyIcon type="primary" /></div>
                    <Button htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </section>
        );
    }
}

export default BurgerConstructor;