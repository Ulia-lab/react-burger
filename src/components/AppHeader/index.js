import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import "./styles.css";
import NavItem from "./NavItem.js";

class AppHeader extends React.Component {
  render() {
    const burgerIcon = <BurgerIcon type="primary" />;
    const listIcon = <ListIcon type="primary" />;
    const profileIcon = <ProfileIcon type="primary" />;

    return (
      <nav>
        <ul className="nav">
          <li>
            <NavItem text="Конструктор" icon={burgerIcon} />
          </li>
          <li>
            <NavItem text="Лента заказов" icon={listIcon} />
          </li>
          <li>
            <a href="/">
              <Logo />
            </a>
          </li>
          <li>
            <NavItem text="Личный кабинет" icon={profileIcon} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default AppHeader;
