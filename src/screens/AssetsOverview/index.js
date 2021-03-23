import React from 'react';
import "./styles.css";

import { Row, Col, Container, Card, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";

const AssetsOverview = () => {
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
        <div className="assets-overview">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="assets__overview__container">
                    <h1>Assets Overview</h1>
                    <Row className="assets__overview__container__row">
                        <div className="assets__overview__container__left">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYxICg4OTU4MSkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+RGFzaGVkIGNpcmNsZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLotYTkuqciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLotYTkuqfmpoLop4giIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjQuMDAwMDAwLCAtMjYxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i57yW57uELTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjQuMDAwMDAwLCAyNDguMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iRGFzaGVkLWNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCwwIEMxOSwwIDIzLjYyLDIuNjcgMjYuMTIsNyBDMjguNjIsMTEuMzMgMjguNjIsMTYuNjcgMjYuMTIsMjEgQzIzLjYyLDI1LjMzIDE5LDI4IDE0LDI4IEM5LDI4IDQuMzgsMjUuMzMgMS44OCwyMSBDLTAuNjIsMTYuNjcgLTAuNjIsMTEuMzMgMS44OCw3IEM0LjM4LDIuNjcgOSwwIDE0LDAgTDE0LDYgQzExLjE0LDYgOC41LDcuNTIgNy4wNywxMCBDNS42NCwxMi40OCA1LjY0LDE1LjUyIDcuMDcsMTggQzguNSwyMC40OCAxMS4xNCwyMiAxNCwyMiBDMTYuODYsMjIgMTkuNSwyMC40OCAyMC45MywxOCBDMjIuMzYsMTUuNTIgMjIuMzYsMTIuNDggMjAuOTMsMTAgQzE5LjUsNy41MiAxNi44Niw2IDE0LDYgTDE0LDAgWiIgaWQ9IkJhc2UtcGxhdGUiIGZpbGwtb3BhY2l0eT0iMC4wMDIiIGZpbGw9IiM0NTVBNjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQsMCBDMTksMCAyMy42MiwyLjY3IDI2LjEyLDcgQzI2LjI2LDcuMjUgMjYuNCw3LjUgMjYuNTMsNy43NiBMMjEuMTYsMTAuNDMgQzE5Ljg5LDcuODcgMTcuMzQsNi4yIDE0LjQ5LDYuMDIgQzE0LjMzLDYuMDEgMTQuMTYsNiAxNCw2IEwxNCwwIFoiIGlkPSJEYXNoLTAiIGZpbGw9IiM2M0E5RjAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy4zMSw5LjY3IEMyOC44NiwxNC40MyAyNy43NSwxOS42NSAyNC40LDIzLjM3IEMyNC4yMSwyMy41OCAyNC4wMiwyMy43OSAyMy44MSwyMy45OSBMMTkuNiwxOS43MSBDMjEuNjQsMTcuNzEgMjIuNDYsMTQuNzcgMjEuNzUsMTIgQzIxLjcxLDExLjg0IDIxLjY2LDExLjY5IDIxLjYxLDExLjUzIEwyNy4zMSw5LjY3IFoiIGlkPSJEYXNoLTEiIGZpbGw9IiM0NzVFQUQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMi4yMywyNS4zMyBDMTguMTgsMjguMjcgMTIuODgsMjguODIgOC4zMSwyNi43OSBDOC4wNSwyNi42NyA3Ljc4LDI2LjU0IDcuNTMsMjYuNDEgTDEwLjMsMjEuMDkgQzEyLjgzLDIyLjQxIDE1Ljg4LDIyLjI4IDE4LjI5LDIwLjc1IEMxOC40MywyMC42NiAxOC41NywyMC41NyAxOC43LDIwLjQ3IEwyMi4yMywyNS4zMyBaIiBpZD0iRGFzaC0yIiBmaWxsPSIjQ0JERkYwIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNzcsMjUuMzMgQzEuNzIsMjIuMzkgLTAuNDQsMTcuNTEgMC4wOCwxMi41NCBDMC4xMSwxMi4yNSAwLjE0LDExLjk2IDAuMTksMTEuNjggTDYuMTEsMTIuNjggQzUuNjQsMTUuNSA2LjcxLDE4LjM1IDguOTEsMjAuMTcgQzkuMDQsMjAuMjcgOS4xNywyMC4zNyA5LjMsMjAuNDcgTDUuNzcsMjUuMzMgWiIgaWQ9IkRhc2gtMyIgZmlsbD0iIzkwQUVDOSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjY5LDkuNjcgQzIuMjQsNC45MSA2LjIsMS4zNSAxMS4wOSwwLjMxIEMxMS4zNywwLjI1IDExLjY2LDAuMTkgMTEuOTQsMC4xNSBMMTIuODIsNi4wOSBDOS45OSw2LjUxIDcuNjEsOC40IDYuNTYsMTEuMDYgQzYuNSwxMS4yMSA2LjQ0LDExLjM3IDYuMzksMTEuNTMgTDAuNjksOS42NyBaIiBpZD0iRGFzaC00IiBmaWxsPSIjMzNDNkFBIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="" />
                            <h2>0</h2>
                        </div>
                        <div className="assets__overview__container__right">
                            <Link className="assets-green-button">Deposit</Link>
                            <Link className="assets-green-text-button">Buy Crypto</Link>
                            <Link className="assets-green-text-button">Withdraw</Link>
                        </div>
                    </Row>
                    <Row className="assets__overview__container__row">
                        <Col md="4" >
                            <Link to="/assets/main-account">
                                <Card body className="assets__overview__card_1" >
                                    <CardTitle>Main Account</CardTitle>
                                    <CardText>
                                        <h3>0</h3>
                                        <Link className="assets__overview__card__button">Transfer</Link>
                                        <Link className="assets__overview__card__button">Lend</Link>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link to="/assets/trading-account">
                                <Card body className="assets__overview__card_2">
                                    <CardTitle>Trading Account</CardTitle>
                                    <CardText>
                                        <h3>0</h3>
                                        <Link className="assets__overview__card__button">Transfer</Link>
                                        <Link className="assets__overview__card__button">Trade</Link>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                        <Col md="4">
                            <Link to="/assets/main-account">
                                <Card body className="assets__overview__card_3">
                                    <CardTitle>Pool-X Account</CardTitle>
                                    <CardText>
                                        <h3>0</h3>
                                        <Link className="assets__overview__card__button">Transfer</Link>
                                        <Link className="assets__overview__card__button">Stake</Link>
                                    </CardText>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container className="assets__overview__container__faq">
                    <h4>FAQ</h4>
                    <div className="faq-question-answers">
                        <div className="faq-question">
                            What are the differences among the 'Main Account', 'Trading Account', 'Margin Account', 'Futures Account' and 'Pool-X Account'?
                        </div>
                        <div className="faq-answer">
                            The 'Main Account' is used for cryptocurrency deposit & withdrawal, fiat-to-crypto purchase via credit card, and margin lendings, the 'Trading Account' is for cryptocurrency transaction and the 'Margin Account' is for margin borrowing and margin trading. The 'Futures Account' is used for futures trading such as XBTUSD perpetual futures and the 'Pool-X Account' is for Staking mining, offering annual yield up to 20%.
                        </div>
                    </div>
                    <div className="faq-question-answers">
                        <div className="faq-question">
                            What are the differences between 'Loans', 'Liabilities' and the 'Estimated Value' of the account?
                        </div>
                        <div className="faq-answer">
                            Loans' refers to the amount of crypto lent out from the 'Main Account' via margin, while 'Liabilities' refers to the amount of crypto borrowed into the 'Margin Account' via margin. Both 'Liabilities' and 'Loans' are included in the 'Estimated Value' of your account. Please note that the 'Loans' will not generate KuCoin Bonus while 'Liabilities' will.
                        </div>
                    </div>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div>
    )
}

export default AssetsOverview
