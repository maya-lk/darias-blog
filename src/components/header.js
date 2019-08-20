import React from 'react'
import { Navbar , Button } from 'react-bootstrap'

export default (props) => (
    <header className="header">
        <Navbar className="mainNavbar justify-content-between">
            <Navbar.Brand href="/">
                <img src={props.url} alt={props.alt} />
            </Navbar.Brand>
            <Button className="menuToggler">Menu</Button>
        </Navbar>
    </header>
);