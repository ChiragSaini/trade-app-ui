import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Tooltip
} from 'reactstrap';
import "./Navbar.css"
import Tooltip_Button from "../ToolTipButton/Tooltip_Button"
import CurrenciesList from "../CurrenciesList";

const MyNavbar = ({ selectedCurrencies, setSelectedCurrencies, mainPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCurrenciesList, setIsOpenCurrenciesList] = useState(false);

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    const toggle = () => setIsOpen(!isOpen);
    const toggleCurrenciesList = () => setIsOpenCurrenciesList(prevState => !prevState)

    return (
        // <Container fluid>
        <Navbar light expand="lg" style={{ zIndex: "10", backgroundColor: "#fff", borderBottom: "3px solid #f3f3f3", height: "100%" }} >
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
                <NavbarBrand href="/">ExchangeApp</NavbarBrand>
                {
                    mainPage &&
                    <Nav className="mr-auto p-2" navbar>
                        <NavItem>
                            <div onClick={toggleCurrenciesList} >
                                <CurrenciesList selectedCurrencies={selectedCurrencies} setSelectedCurrencies={setSelectedCurrencies} />
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="col-12">
                                <div className="navbar__text__heading">
                                    <span style={{ color: "gray" }}>Price</span>
                                </div>
                                <div className="navbar__text__body">
                                    0.000308 <span style={{ color: "rgb(36, 174, 143)" }}>+6.31%</span>
                                </div>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="col-12">
                                <div className="navbar__text__heading">
                                    <span style={{ color: "gray" }}>24H High</span>
                                </div>
                                <div className="navbar__text__body">
                                    0.000329
                                </div>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="col-12">
                                <div className="navbar__text__heading">
                                    <span style={{ color: "gray" }}>24H Low</span>
                                </div>
                                <div className="navbar__text__body">
                                    0.000288
                                </div>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="col-12">
                                <div className="navbar__text__heading">
                                    <span style={{ color: "gray" }}>24H Amount</span>
                                </div>
                                <div className="navbar__text__body">
                                    1,924.02 USD
                                </div>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="col-12 ">
                                <div className="navbar__text__heading">
                                    <span style={{ color: "gray" }}>24H Volume</span>
                                </div>
                                <div className="navbar__text__body">
                                    523,562.93054662
                                </div>
                            </div>
                        </NavItem>
                    </Nav>
                }
                <Nav className="ml-auto">
                    <NavItem>
                        <Tooltip_Button text="xxms" icon="fas fa-wifi" />
                    </NavItem>
                    <NavItem>
                        <NavLink to="/assets" className="navbar-wallet-button">
                            <i class="fas fa-wallet"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id="TooltipExample" className="navbar-profile-button" to="/account">CH</NavLink>
                        <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggleTooltip}>
                            Profile
                        </Tooltip>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login"><button className="btn" style={{ background: "#24AE8F", color: "#fff", fontSize: "12px", marginTop: "5px" }}>Log In</button></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signup"> <button className="btn ml-2" style={{ color: "#24AE8F", background: "#fff", border: "1px lightgrey solid", fontSize: "12px", marginTop: "5px" }}>Sign Up</button></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default MyNavbar;
