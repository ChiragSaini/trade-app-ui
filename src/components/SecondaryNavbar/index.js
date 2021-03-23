import React, { useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";
import "./styles.css"

const SecondaryNavbar = ({ tabs }) => {
    return (
        <Nav pills className="secondary-navbar">
            {
                tabs.map(tab => (
                    <NavItem>
                        <NavLink activeClassName="active" exact to={tab.path} >{tab.name}</NavLink>
                    </NavItem>
                ))
            }
        </Nav>
    );
}

export default SecondaryNavbar;