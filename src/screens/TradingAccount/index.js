import React from 'react';
import "./styles.css";
import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";
import AssetsRow from "../../components/AssetsRow";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

const TradingAccount = () => {
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
    const values = [
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACT.png",
            name: "ACT",
            total: 0,
            available: 0,
            inorders: 0,
            operations: [
                {
                    name: "Trade",
                    url: `/assets/coin`
                },
                {
                    name: "Transfer",
                    url: `/assets/transfer`
                },
            ]
        },
    ]
    return (
        <div className="trading-account">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container>
                    <Row className="trading-account-main-row">
                        <h4>Trading Account</h4>
                        <Link className="trading-account-row-account-details">Account Details</Link>
                    </Row>
                    <Row>
                        <Container style={{ background: "#f6f8f9", padding: "10px", fontSize: "0.875rem" }}>
                            Estimated Value: 0 BTC (Loans: 0 BTC)
                        </Container>
                    </Row>
                    <Row>
                        <Container style={{ background: "#fff", padding: "10px" }}>
                            <Row style={{ borderBottom: "1px solid #ddd", padding: "0px 20px" }}>
                                <Col md="2">Coin</Col>
                                <Col md="2">Total</Col>
                                <Col md="2">Available amount</Col>
                                <Col md="2">In orders</Col>
                                <Col md="4">Operation</Col>
                            </Row>
                            {
                                values.map(value => <AssetsRow value={value} />)
                            }
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

export default TradingAccount
