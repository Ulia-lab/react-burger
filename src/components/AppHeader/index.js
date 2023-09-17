import React from 'react'
import {
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo'
import headerStyles from './header.module.css'
import cn from 'classnames'
import NavItem from './NavItem.js'
import { Link, NavLink } from 'react-router-dom'

function AppHeader() {
    const primary = 'primary'
    const secondary = 'secondary'

    return (
        <header>
            <ul className={cn('mb-4 mt-4', headerStyles.nav)}>
                <li>
                    <nav className={headerStyles.menu}>
                        <NavLink to="/">
                            {({ isActive }) => (
                                <NavItem
                                    className={cn(
                                        isActive
                                            ? 'text text_type_main-default'
                                            : 'text text_type_main-default text_color_inactive'
                                    )}
                                    text="Конструктор"
                                    icon={
                                        <BurgerIcon
                                            type={
                                                isActive ? primary : secondary
                                            }
                                        />
                                    }
                                />
                            )}
                        </NavLink>
                        <NavLink to="/orders">
                            {({ isActive }) => (
                                <NavItem
                                    className={cn(
                                        isActive
                                            ? 'text text_type_main-default'
                                            : 'text text_type_main-default text_color_inactive'
                                    )}
                                    text="Лента заказов"
                                    icon={
                                        <ListIcon
                                            type={
                                                isActive ? primary : secondary
                                            }
                                        />
                                    }
                                />
                            )}
                        </NavLink>
                    </nav>
                </li>
                <li>
                    <Link to="/">
                        <Logo />
                    </Link>
                </li>
                <li>
                    <NavLink to="/profile">
                        {({ isActive }) => (
                            <NavItem
                                className={cn(
                                    isActive
                                        ? 'text text_type_main-default'
                                        : 'text text_type_main-default text_color_inactive'
                                )}
                                text="Личный кабинет"
                                icon={
                                    <ProfileIcon
                                        type={isActive ? primary : secondary}
                                    />
                                }
                            />
                        )}
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default AppHeader
