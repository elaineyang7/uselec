import React from 'react';

import MenuButton from '../menu-button/MenuButton.jsx';
import SlideMenu from '../slide-menu/SlideMenu';

import './Header.scss';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <header>
      <div className="header__container">
        <a href="/">
          <h3>Uselec</h3>
        </a>
        <div 
          ref={node} 
          className="menuBtn"
        >
          <MenuButton open={open} setOpen={setOpen} />
          <SlideMenu open={open} setOpen={setOpen} />
        </div>
        <div className="menu">
          <ul className="menu__links">
            <li className="menu__link">
              <a href="/">
                About
              </a>
            </li>
            <li className="menu__link">
              <a href="/">
                Order Flow
              </a>
            </li>
            <li className="menu__link">
              <a href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;