import "./styles.css";
import React from 'react';

const NavItem = ({ text, icon }) => (
  <a className="button" href="/">
    {icon}
    <p className="text text_type_main-default">{text}</p>
  </a>
);

export default NavItem;
