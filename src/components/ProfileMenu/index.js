import React from "react";
import menuStyle from "./menu.module.css";
import cn from 'classnames';
import { NavLink } from "react-router-dom";

export function ProfileMenu({ onClick }) {
    const menuItems = [{ title: 'Профиль', link: '/profile'}, {title: 'История заказов', link: '/profile/orders'}];
    return (
        <div className={menuStyle.block}>
            {menuItems.map((item, index) => <NavLink to={item.link} key={index} active="true" className={cn("text text_type_main-medium", menuStyle.item)}>{item.title}</NavLink>)}
            <button onClick={onClick} className={cn("text text_type_main-medium", menuStyle.item)}>Выход</button>
            <div className='mt-20 text text_type_main-default text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</div>
        </div>
    );
}

export default ProfileMenu;