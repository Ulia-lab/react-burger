import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import orderListStyle from "./ordersList.module.css";
import cn from "classnames";
import NavItem from "./orderItem";
import { Link, NavLink } from "react-router-dom";
import OrderItem from "./orderItem";

function OrdersList() {
  return (
    <section className={orderListStyle.section}>
      <h1 className={cn("text text_type_main-large mb-4")}>Лента заказов</h1>
      <div
        className={orderListStyle.cardListBlock}
      >
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </section>
  );
}

export default OrdersList;
