import React, { useState, useEffect } from "react";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import orderStyle from "./orderDetails.module.css";
import cn from 'classnames'
import postOrder from "../../../utils/postOrder";
import { ORDER_URL } from '../../../utils/constants'
import PropTypes from 'prop-types';

function OrderDetails({ ...props }) {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        postOrder({ url: ORDER_URL, orderId: props.orderId, setOrder: setOrder });
    }, [props.orderId]);

    return (
        <div className={cn(orderStyle.block, "mt-30 ml-20 mr-20 mb-30")}>
            <div className={cn(orderStyle.number, "mb-8")}><p className="text text_type_digits-large ">{order?.order?.number}</p></div>
            <p className="text text_type_main-medium ">Идентификатор заказа</p>
            <div className={cn(orderStyle.checkMarkIcon, "mb-10 mt-10")}><CheckMarkIcon type="primary" /></div>
            <p className="text text_type_main-small">Ваш заказ начали готовить</p>
            <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}

OrderDetails.propTypes = {
    orderId: PropTypes.shape({
        ingredient: PropTypes.arrayOf(PropTypes.string)
    })
}

export default OrderDetails;