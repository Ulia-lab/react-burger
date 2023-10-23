import React from "react";
import headerStyles from "./header.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import cn from 'classnames'
import { NavItemProps } from "./interfaces";

const NavItem = ({ className, text, icon }: NavItemProps) => (
  <div className={cn('pb-2 pt-3 pr-3 pl-3', headerStyles.button)}>
    <div className="pr-2">{icon}</div>
    <p className={className}>{text}</p>
  </div>
);

export default NavItem;
