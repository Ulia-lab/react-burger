import React, { useMemo } from "react";
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

function BurgerConstructor({ data }) {
    const isLocked = true;
    const totalPrice = useMemo(() =>  data.reduce((acc, card) => acc + card.price, 0), [data]);

    const [openIngredientDetails, setIngredientDetails] = React.useState(false);
    const handleOpenModal = () => {
        setIngredientDetails(true);
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
            {openIngredientDetails && <Modal content={<OrderDetails />} setIngredientDetails={setIngredientDetails} />}
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
    })).isRequired
};

export default BurgerConstructor;