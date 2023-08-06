import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo";
import headerStyles from "./header.module.css";
import cn from 'classnames'
import NavItem from "./NavItem.jsx";

function AppHeader() {
  let isActive = true;
  const primary = 'primary';
  const secondary = 'secondary';
  const burgerIcon = <BurgerIcon type={isActive ? primary : secondary} />
  const listIcon = <ListIcon type={!isActive ? primary : secondary} />
  const profileIcon = <ProfileIcon type={!isActive ? primary : secondary} />

  return (
    <header>
      <ul className={cn('mb-4 mt-4', headerStyles.nav)}>
        <li>
          <nav className={headerStyles.menu}>
            <NavItem className="text text_type_main-default" text="Конструктор" icon={burgerIcon} />
            <NavItem className="text text_type_main-default text_color_inactive" text="Лента заказов" icon={listIcon} />
          </nav>
        </li>
        <li>
          <a href="/">
            <Logo />
          </a>
        </li>
        <li>
          <NavItem className="text text_type_main-default text_color_inactive" text="Личный кабинет" icon={profileIcon} />
        </li>
      </ul>
    </header>
  );
}

export default AppHeader;