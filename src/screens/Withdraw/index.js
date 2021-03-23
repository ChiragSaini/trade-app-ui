import React from 'react';
import "./styles.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Withdraw = () => {
    const tabs = [
        {
            path: "/assets",
            name: "Assets Overview"
        },
        {
            path: "/assets/main-account",
            name: "Main Account"
        },
        {
            path: "/assets/trading-account",
            name: "Trading Account"
        },
        {
            path: "/assets/coin",
            name: "Deposit"
        },
        {
            path: "/assets/withdraw",
            name: "Withdraw"
        },
        {
            path: "/assets/record",
            name: "History"
        },
    ]
    return (
        <div className="withdraw-main">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="withdraw-main-container">
                    <div className="withdraw-main-container-row1">
                        <div></div>
                        <div></div>
                        <h3>Withdraw</h3>
                        <Link className="manage-withdraw-button">Manage withdrawl address</Link>
                    </div>
                    <div className="withdraw-main-container-row2">
                        <p>To ensure the account security, please enable the two security protection methods as follows:</p>
                        <p><i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i>&nbsp;SMS Verification or Google Verification &emsp;<Link>Edit</Link></p>
                        <p><i className="fa fa-times-circle" style={{ background: "lightsalmon", borderRadius: "50%", fontSize: "0.875rem", padding: "5px" }}></i>&nbsp;Setting Trade Password &emsp;<Link>Edit</Link></p>
                    </div>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div >
    )
}

export default Withdraw;