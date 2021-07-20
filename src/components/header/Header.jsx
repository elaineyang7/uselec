import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

import MenuButton from '../menu-button/MenuButton.jsx';
import SlideMenu from '../slide-menu/SlideMenu';

import './Header.scss';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  return (
    <header>
      <div className="header__container">
      <HashRouter>
        <Link 
          className='uselec' 
          to={{
            pathname: './index.html',
            state: {fromDashboard: true }
          }}
        >
        
          <h3>Uselec</h3>
        </Link>
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
              <Link 
                className='option' 
                to={{
                  pathname: './abaout.html',
                  state: {fromDashboard: true }
                }}
              >
                About
              </Link>
            </li>
            <li className="menu__link">
            <Link className='option' to='/orderflow'>
                Order Flow
              </Link>
            </li>
            <li className="menu__link">
              <Link className='option' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        </HashRouter>
      </div>
    </header>
  );
}

export default Header;