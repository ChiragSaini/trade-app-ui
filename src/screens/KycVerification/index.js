import React from 'react';
import "./styles.css";

import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";
import Withdraw from "../../assets/withdraw.svg";
import Contract from "../../assets/contract.svg";
import OTC from "../../assets/otc.svg";
import { Container, Row, Col, Badge } from 'reactstrap';

const KycVerification = () => {
    const tabs = [
        {
            path: "/account",
            name: "User Profiles"
        },
        {
            path: "/account/security-settings",
            name: "Security Settings"
        },
        {
            path: "/account/kyc-verification",
            name: "Kyc Verification"
        },
        {
            path: "/account/basic-info",
            name: "Basic Information"
        },
    ]
    return (
        <>
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="kyc__verfication__container">
                    <h2>Individual Verification</h2>
                    <br />
                    <p className="kyc__verification__container__subheading">Current Benefits</p>
                    <div className="kyc__verfication__container__benefits">
                        <span>Deposit <i className="fa fa-check"></i>&emsp;</span>
                        <span>Exchange <i className="fa fa-check"></i>&emsp;</span>
                        <span>Margin Trade <i className="fa fa-check"></i>&emsp;</span>
                    </div>
                    <br />
                    <p className="kyc__verification__container__subheading">Available Benefits for Successful Verification</p>
                    <Row style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center" }}>
                        <Col md="4" style={{ marginTop: "8px" }} >
                            <div className="kyc__verification__container__card">
                                <img src={Withdraw} alt="" />
                                <small style={{ marginTop: "24px", marginBottom: "4px" }}>Withdrawal Limit</small>
                                <p style={{ fontWeight: "600", marginBottom: "24px" }}>Daily Withdrawal Limit: 5 BTC</p>
                            </div>
                        </Col>
                        <Col md="4" style={{ marginTop: "8px" }} >
                            <div className="kyc__verification__container__card">
                                <img src={Contract} alt="" />
                                <small style={{ marginTop: "24px", marginBottom: "4px" }}>Futures Trading Leverage</small>
                                <p style={{ fontWeight: "600", marginBottom: "24px" }}>Max. Leverage on Futures Trading: 100x</p>
                            </div>
                        </Col>
                        <Col md="4" style={{ marginTop: "8px" }} >
                            <div className="kyc__verification__container__card">
                                <img src={OTC} alt="" />
                                <small style={{ marginTop: "24px", marginBottom: "4px" }}>Fiat-to-Crypto Trading Limit</small>
                                <p style={{ fontWeight: "600", marginBottom: "24px" }}>Daily Trading Limit: 1400 USDT</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </>
    )
}

export default KycVerification;