import React, { useState } from 'react';
import './styles.css';

// * Screens
import Navbar from "../../components/Navbar/Navbar"
import OrderBook from "./partials/OrderBookSection/OrderBook"
import OrderSummarySection from "./partials/OrderSummarySection/OrderSummarySection"
import BuyOrSellSection from "./partials/BuyOrSellSection/BuyOrSellSection"
import ChartSection from "./partials/ChartSection"

function Home() {
    const [selectedCurrencies, setSelectedCurrencies] = useState([])
    console.log(selectedCurrencies)

    const removeFromSelectedCurrencies = (e) => {
        console.log(e.target.value)
        let new_list = [];
        for (let i = 0; i < selectedCurrencies.length; i++) {
            if (e.target.value !== selectedCurrencies[i]) {
                new_list.push(selectedCurrencies[i]);
            }
        }
        console.log(new_list)
        setSelectedCurrencies(new_list);
    }

    return (
        <div className="main">
            <div style={{ height: "8%" }}>
                <Navbar selectedCurrencies={selectedCurrencies} setSelectedCurrencies={setSelectedCurrencies} mainPage={true} />
            </div>
            <div className="contents" style={{ height: "92%" }}>
                <div style={{ float: "left", width: "60%", height: "100%", borderRight: "5px solid #f3f3f3" }}>
                    <div style={{ height: "70%" }}>
                        <ChartSection selectedCurrencies={selectedCurrencies} removeFromSelectedCurrencies={removeFromSelectedCurrencies} />
                    </div>
                    <div style={{ height: "30%", borderTop: "5px solid #e3e3e3" }}>
                        <OrderSummarySection />
                    </div>
                </div>
                <div style={{ float: "left", width: "40%", height: "100%" }}>
                    <div className="upper-div-buyorsell border-between-boxes" >
                        <BuyOrSellSection />
                    </div>
                    <div className="lower-div-orderbook border-between-boxes" >
                        <OrderBook />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;