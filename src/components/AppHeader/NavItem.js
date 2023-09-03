import React from "react";
import headerStyles from "./header.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import PropTypes from 'prop-types';
import cn from 'classnames'

const NavItem = ({ className, text, icon }) => (
  <div className={cn('pb-2 pt-3 pr-3 pl-3', headerStyles.button)}>
    <div className="pr-2">{icon}</div>
    <p className={className}>{text}</p>
  </div>
);

export default NavItem;

NavItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}; 