import React from 'react';
import { Navbar, NavItem, Row, Icon } from 'react-materialize';

import logo from '../../images/logo.png';
import './header.css';

const Header = () => (
  <Row>
    <Navbar
    brand={<a><img src={logo} alt='OneBitTwitter'
    className='responsive-img col m6 center logo' /></a>}
    alignLinks="right" className='navbar'
    >
      <NavItem href='/logout'>
        Logout
      </NavItem>

      <NavItem href='/user/x/edit'>
        <Icon class='icon_user'>account_circle</Icon>
      </NavItem>
    </Navbar>
  </Row>
);

export default Header;
