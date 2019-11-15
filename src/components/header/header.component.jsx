import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSiteLogo } from '../../redux/settings/settings.selectors';

import MenuButton from '../menu-button/menu-button.component';
import Menu from '../menu/menu.component';

const Header = ({ logo }) => (
    <header className="header">               
        <Menu/>
        <Navbar className="mainNavbar justify-content-between">
            <Navbar.Brand href="/" as={Link} to="/">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <MenuButton/>
        </Navbar>
    </header>
)

const mapStateToProps = createStructuredSelector({
    logo : selectSiteLogo,
});

export default connect(mapStateToProps)(Header);