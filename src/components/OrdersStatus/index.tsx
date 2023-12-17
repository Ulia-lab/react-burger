import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import ordersStatusStyle from "./ordersStatus.module.css";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";

function OrdersStatus() {
  return (
    <section className={ordersStatusStyle.section}>
      <div className={ordersStatusStyle.readyBlock}>
        <div className={ordersStatusStyle.readyItem}>
          <p className="pb-6 text text_type_main-medium">Готовый:</p>
          <p className="text text_type_digits-default">324324324</p>
        </div>
        <div className={ordersStatusStyle.readyItem}>
          <p className="pb-6 text text_type_main-medium">В работе:</p>
          <p className="text text_type_digits-default">324324324</p>
        </div>
      </div>
    </section>
  );
}

export default OrdersStatus;
