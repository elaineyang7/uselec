import React from 'react';
import styled from "styled-components";

import './SlideMenu.scss';

const StyledMenu = styled.nav`
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-200%)'};
`

const SlideMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu 
      className="slide-menu"
      open={open}
    >
      <ul className="menu__links">
        <li className="menu__link line">
          <a 
            href="/"
            open={open} 
            onClick={() => setOpen(!open)}
          >
            About
          </a>
        </li>
        <li className="menu__link line">
          <a 
            href="/"
            open={open} 
            onClick={() => setOpen(!open)}
          >
            Order Flow
          </a>
        </li>
        <li className="menu__link">
          <a 
            href="/"
            open={open} 
            onClick={() => setOpen(!open)}
          >
            Contact
          </a>
        </li>
      </ul>
    </StyledMenu>
  );
}

export default SlideMenu;