import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import cn from "classnames";
import { NavItemProps } from "./interfaces";
import orderListStyle from "./ordersList.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";

const OrderItem = () => (
  <div className={orderListStyle.item}>
    <div className={orderListStyle.itemInfo}>
      <p className="text text_type_digits-default">#327467327</p>
      <p className="text text_type_main-default">27 сент</p>
    </div>
    <p className="text text_type_main-medium"> /card/base</p>
    <div className={orderListStyle.itemInfo}>
      <div>image</div>
      <p className="text text_type_digits-default"><CurrencyIcon type="primary" />327</p>
    </div>
  </div>
);

export default OrderItem;
