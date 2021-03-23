import React from 'react';
import { Row, Col, Container } from "reactstrap";
import "./styles.css";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";

const SecuritySettings = () => {
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
        <div className="security__page">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="security__page__container">
                    <Row style={{ background: "#f5f8f9", padding: "10px", marginTop: "2em" }}>
                        Security Settings
                    </Row>
                    <Row style={{ padding: "20px", background: "#fff", marginTop: "10px" }} >
                        <Container className="security__page__container__inner__yellow">
                            <span>To ensure your account security, please select 「Google Verification + Email Binding + Trading Password 」 or 「Phone Number Binding + Trading Password」 combinations as the strategic security mode.</span>
                        </Container>
                        <Container className="security__page__container__inner__icons">
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fas fa-key fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Login Password</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-check" style={{ background: "#91d6c7", color: "#24ae8f", borderRadius: "50%", padding: "5px" }}></i>&nbsp;&nbsp;Used for Account Login</span>
                                        <Link>&nbsp;<span style={{ color: "#24ae8f" }}>Change</span></Link>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fab fa-google fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Login Password</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-times-circle" style={{ background: "red", borderRadius: "50%", color: "white", padding: "2px" }}></i>&nbsp;&nbsp;Used for the verification in account login, withdrawal etc.</span>
                                        <Link>&nbsp;<span style={{ color: "#24ae8f" }}>Set</span></Link>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fa fa-phone fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Phone</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-times-circle" style={{ background: "red", borderRadius: "50%", color: "white", padding: "2px" }}></i>&nbsp;&nbsp;Used for the verification in account login, withdrawal etc.</span>
                                        <Link>&nbsp;<span style={{ color: "#24ae8f" }}>Set</span></Link>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fa fa-envelope fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Email</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-check" style={{ background: "#91d6c7", color: "#24ae8f", borderRadius: "50%", padding: "5px" }}></i>&nbsp;&nbsp;Used for the verification in account login, withdrawal etc.</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fab fa-google fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Trading Password</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-times-circle" style={{ background: "red", borderRadius: "50%", color: "white", padding: "2px" }}></i>&nbsp;&nbsp;Used for the verification in account login, withdrawal etc.</span>
                                        <Link>&nbsp;<span style={{ color: "#24ae8f" }}>Set</span></Link>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ padding: "10px", margin: "0", marginBottom: "10px" }}>
                                <Col md="3">
                                    <Row className="security__page__container__inner__icons__col1">
                                        <i className="fa fa-desktop fa-1x" style={{ background: "skyblue", borderRadius: "50%", color: "white", padding: "10px" }}></i>
                                        <span>&emsp;Restrict IP Login</span>
                                    </Row>
                                </Col>
                                <Col md="9">
                                    <Row className="security__page__container__inner__icons__col2">
                                        <span><i className="fas fa-times-circle" style={{ background: "red", borderRadius: "50%", color: "white", padding: "2px" }}></i>&nbsp;&nbsp;&nbsp;If enabled, when your login IP changes, the account protection mechanism triggers.</span>
                                        <Link>&nbsp;<span style={{ color: "#24ae8f" }}>Set</span></Link>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div>
    )
}

export default SecuritySettings
