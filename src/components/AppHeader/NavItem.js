import React from "react";
import "./styles.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import PropTypes from 'prop-types';

const NavItem = ({ className, text, icon }) => (
  <a href="/">
    <div className="pb-2 pt-3 pr-3 pl-3 button">
      <div className="pr-2">{icon}</div>
      <p className={className}>{text}</p>
    </div>
  </a>
);

export default NavItem;

NavItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
}; 