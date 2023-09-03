import React from "react";
import menuStyle from "./menu.module.css";
import cn from 'classnames';
import { NavLink } from "react-router-dom";

export function ProfileMenu() {
    const menuItems = ['Профиль', 'История заказов', 'Выход'];
    return (
        <div className={menuStyle.block}>
            {menuItems.map((item, index) => <NavLink key={index} active={true} className={cn("text text_type_main-medium", menuStyle.item)}>{item}</NavLink>)}
            <div className='mt-20 text text_type_main-default text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</div>
        </div>
    );
}

export default ProfileMenu;