import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            className='option' 
            to='/about'
            open={open} 
            onClick={() => setOpen(!open)}
          >
            About
          </Link>
        </li>
        <li className="menu__link line">
          <Link 
            className='option' 
            to='/orderflow'
            open={open} 
            onClick={() => setOpen(!open)}
          >
            Order Flow
          </Link>
        </li>
        <li className="menu__link">
          <Link 
            className='option' 
            to='/contact'
            open={open} 
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  );
}

export default SlideMenu;