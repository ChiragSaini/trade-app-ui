import React, { useState } from 'react';
import "./styles.css";
import { Row, Col, Container, Input } from "reactstrap";

import Navbar from "../../components/Navbar/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Footer from "../../components/Footer";

const Deposit = () => {
    const currencies = [
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/BTC.png",
            name: "BTC",
            fullname: "Bitcoin"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/USDT.png",
            name: "USTD",
            fullname: "Tether"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ETH.png",
            name: "ETH",
            fullname: "Ethereum"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            fullname: "Alphacat"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/BTC.png",
            name: "BTC",
            fullname: "Bitcoin"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/USDT.png",
            name: "USTD",
            fullname: "Tether"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ETH.png",
            name: "ETH",
            fullname: "Ethereum"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            fullname: "Alphacat"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/BTC.png",
            name: "BTC",
            fullname: "Bitcoin"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/USDT.png",
            name: "USTD",
            fullname: "Tether"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ETH.png",
            name: "ETH",
            fullname: "Ethereum"
        },
        {
            src: "https://assets-currency.kucoin.com/www/coin/pc/ACAT.png",
            name: "ACAT",
            fullname: "Alphacat"
        },
    ]
    const [currency, setCurrency] = useState(currencies[0].name || null)
    const [account, setAccount] = useState("main-account")
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
    const handleChangeCurrency = (e) => {
        console.log(e.target.value)
        setCurrency(e.target.value)
    }
    const handleChangeAccount = (e) => {
        console.log(e.target.value)
        setAccount(e.target.value)
    }

    return (
        <div className="deposit-main">
            <div className="navbar-div">
                <Navbar />
            </div>
            <div className="secondary-navbar-div">
                <SecondaryNavbar tabs={tabs} />
            </div>
            <div className="middle-div">
                <Container className="deposit-main-container">
                    <h3>Deposit </h3>
                    <Input type="select" name="currencies-deposit" className="w-50 mt-2 deposit-select-field" onChange={handleChangeCurrency}>
                        {
                            currencies.map(c => {
                                return (
                                    <option value={c.name}>
                                        {c.name} ({c.fullname})
                                    </option>
                                )
                            })
                        }
                    </Input>
                    <Input type="select" name="currencies-deposit" className="w-50 mt-3 deposit-select-field" onChange={handleChangeAccount}>
                        <option value="main-account">Main Account</option>
                        <option value="trade-account">Trade Account</option>
                    </Input>
                    <Container className="deposit-main-container-wallet mt-3">
                        {
                            account && currency &&
                            <div className="deposit-info-container">
                                <div className="deposit-info-container-name">
                                    {currency}&emsp;<span style={{ color: "#999" }}>Wallet Address:</span>
                                </div>
                                <hr />
                                <div className="deposit-info-container-name">
                                    0x3239bc87c7ed07ca832c56ba522c5f81ea8f5f44
                                </div>
                            </div>
                        }
                    </Container>
                    <Container style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <div className="deposit-main-container-tips">
                            <small>Tip:</small>
                            <ul>
                                <li>
                                    <small>The address is not allowed to deposit other assets other than ETH, and any other asset deposit will not be recovered.</small>
                                </li>
                                <li>
                                    <small>The deposit transaction will be automatic, and the ETH transfer will need to be confirmed by the entire ETH network, and your ETH will be automatically deposited to your account after 12 confirmation.</small>
                                </li>
                                <li>
                                    <small>This address is the only one you can use on your own, and you can do multiple recharging at the same time.</small>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </Container>
            </div>
            <div className="lower-div">
                <Footer />
            </div>
        </div>
    )
}

export default Deposit
