import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import ordersStatusStyle from "./ordersList.module.css";
import cn from "classnames";
import NavItem from "./orderItem";
import { Link, NavLink } from "react-router-dom";
import OrderItem from "./orderItem";

function OrdersStatus() {
  return (
    <section className={ordersStatusStyle.section}>
      <div
        className={ordersStatusStyle.cardListBlock}
      >
        <p>Готовый:</p>
        
      </div>
    </section>
  );
}

export default OrdersStatus;
