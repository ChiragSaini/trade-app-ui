import React from 'react';
import "./styles.css";

import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";
import { Row, Col, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

const History = () => {
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
    const [tabSelected, setTabSelected] = React.useState("deposit")
    const toggle = (e) => {
        setTabSelected(e.target.value)
    }

    return (
        <div className="assets-record">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="assets-record-main-container">
                    <Row style={{ background: "#f5f8f9", padding: "10px", marginTop: "2em" }}>
                        <Button
                            onClick={toggle}
                            value="deposit"
                            className={`assets-record-nav-button ${tabSelected === "deposit" ? "isSelected" : ""}`}>
                            Deposit History
                        </Button>
                        <Button
                            onClick={toggle}
                            value="withdrawl"
                            className={`assets-record-nav-button ${tabSelected === "withdrawl" ? "isSelected" : ""}`}>
                            Withdrawl History
                        </Button>
                    </Row>
                    <Row className="assets-record-main-container-table">
                        {
                            tabSelected === "deposit"
                                ?
                                <>
                                    <Col xs="2">Coin or Token</Col>
                                    <Col xs="2">Time</Col>
                                    <Col xs="2">Amount</Col>
                                    <Col xs="2">Blockchain Record</Col>
                                    <Col xs="2">Status</Col>
                                    <Col xs="2">Remark</Col>
                                </>
                                :
                                <>
                                    <Col xs="2">Coin or Token</Col>
                                    <Col xs="1">Time</Col>
                                    <Col xs="1">Amount</Col>
                                    <Col xs="2">Wallet Address</Col>
                                    <Col xs="2">Blockchain Record</Col>
                                    <Col xs="2">Status</Col>
                                    <Col xs="2">Remark</Col>
                                </>
                        }
                    </Row>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div>
    )
}

export default History;