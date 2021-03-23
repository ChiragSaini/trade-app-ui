import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import "./OrderSummarySection.css"

import { fakeData } from "./fakeData";

import BasicTable from "../../../../components/BasicTable"


const BuyOrSellSection = (props) => {
    const [buttonSelected, setButtonSelected] = useState("open-orders");
    console.log(buttonSelected);
    const columnsOpenOrder = React.useMemo(() => [
        {
            Header: "Time",
            accessor: "time"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_pairs" >
            //             <option value="all-pairs">{"All Pairs"}</option>
            //             <option value="current-apirs">{"Current Pair"}</option>
            //         </Input>)
            // },
            Header: "Pairs",
            accessor: "pairs"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_types" >
            //             <option value="all-types">{"All Types"}</option>
            //             <option value="limit-order">{"Limit Order"}</option>
            //             <option value="buy-order">{"Buy Order"}</option>
            //         </Input>)
            // },
            Header: "Types",
            accessor: "types"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="buysell" >
            //             <option value="buyorsell">{"Buy / Sell"}</option>
            //             <option value="buy">{"Buy"}</option>
            //             <option value="sell">{"Sell"}</option>
            //         </Input>)
            // },
            Header: "Buy or Sell",
            accessor: "buysell"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Filled",
            accessor: "filled"
        },
        {
            Header: "Unfilled",
            accessor: "unfilled"
        }
    ], [])

    const columnsStopOrder = React.useMemo(() => [
        {
            Header: "Time",
            accessor: "time"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_pairs" >
            //             <option value="all-pairs">{"All Pairs"}</option>
            //             <option value="curren">{"Current Pair"}</option>
            //         </Input>)
            // },
            Header: "All Pairs",
            accessor: "pairs"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_types" >
            //             <option value="all-types">{"All Types"}</option>
            //             <option value="limit-order">{"Limit Order"}</option>
            //             <option value="buy-order">{"Buy Order"}</option>
            //         </Input>)
            // },
            Header: "Types",
            accessor: "types"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="buysell" >
            //             <option value="buyorsell">{"Buy / Sell"}</option>
            //             <option value="buy">{"Buy"}</option>
            //             <option value="sell">{"Sell"}</option>
            //         </Input>)
            // },
            Header: "Buy or Sell",
            accessor: "buysell"
        },
        {
            Header: "Stop Price",
            accessor: "stopprice"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Amount",
            accessor: "amount"
        }
    ], [])

    const columnsOrderHistory = React.useMemo(() => [
        {
            Header: "Time",
            accessor: "time"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_pairs" >
            //             <option value="all-pairs">{"All Pairs"}</option>
            //             <option value="curren">{"Current Pair"}</option>
            //         </Input>)
            // },
            Header: "All Pairs",
            accessor: "pairs"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_types" >
            //             <option value="all-types">{"All Types"}</option>
            //             <option value="limit-order">{"Limit Order"}</option>
            //             <option value="buy-order">{"Buy Order"}</option>
            //         </Input>)
            // },
            Header: "All types",
            accessor: "types"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="buysell" >
            //             <option value="buyorsell">{"Buy / Sell"}</option>
            //             <option value="buy">{"Buy"}</option>
            //             <option value="sell">{"Sell"}</option>
            //         </Input>)
            // },
            Header: "Buy or Sell",
            accessor: "buysell"
        },
        {
            Header: "Stop Price",
            accessor: "stopprice"
        },
        {
            Header: "Price",
            accessor: "price"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Filled",
            accessor: "filled"
        },
        {
            Header: "Avg. Price",
            accessor: "avgprice"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="buysell" >
            //             <option value="all">{"All"}</option>
            //             <option value="completed">{"Completed"}</option>
            //             <option value="cancelled">{"Cancelled"}</option>
            //         </Input>)
            // },
            Header: "All Orders",
            accessor: "allorders"
        },
    ], [])

    const columnsTradeHistory = React.useMemo(() => [
        {
            Header: "Filled Time",
            accessor: "filledtime"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_pairs" >
            //             <option value="all-pairs">{"All Pairs"}</option>
            //             <option value="curren">{"Current Pair"}</option>
            //         </Input>)
            // },
            Header: "All Pairs",
            accessor: "pairs"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="all_types" >
            //             <option value="all-types">{"All Types"}</option>
            //             <option value="limit-order">{"Limit Order"}</option>
            //             <option value="buy-order">{"Buy Order"}</option>
            //         </Input>)
            // },
            Header: "All types",
            accessor: "types"
        },
        {
            // Header: () => {
            //     return (
            //         <Input type="select" bsSize="sm" style={{ margin: "0 auto", width: "70%" }} name="buysell" >
            //             <option value="buyorsell">{"Buy / Sell"}</option>
            //             <option value="buy">{"Buy"}</option>
            //             <option value="sell">{"Sell"}</option>
            //         </Input>)
            // },
            Header: "Buy or Sell",
            accessor: "buysell"
        },
        {
            Header: "Filled Price",
            accessor: "filledprice"
        },
        {
            Header: "Amount",
            accessor: "amount"
        },
        {
            Header: "Volume",
            accessor: "volume"
        },
        {
            Header: "Fee",
            accessor: "fee"
        },
    ], [])

    return (
        <div className="main-ordersummary" style={{ borderLeftColor: "#fff" }}>
            <Row style={{ padding: "0", margin: "0", background: "#f3f3f3", height: "15%", borderBottom: "1px solid #e3e3e3" }}>
                <button className={"my-button ripple " + (buttonSelected === "open-orders" ? "this-will-active" : "")} onClick={() => setButtonSelected("open-orders")} ><span className="button-text">Open Orders</span></button>
                <button className={"my-button ripple " + (buttonSelected === "stop-orders" ? "this-will-active" : "")} onClick={() => setButtonSelected("stop-orders")} ><span className="button-text">Stop Orders</span></button>
                <button className={"my-button ripple " + (buttonSelected === "order-history" ? "this-will-active" : "")} onClick={() => setButtonSelected("order-history")} ><span className="button-text">Orders History</span></button>
                <button className={"my-button ripple " + (buttonSelected === "trade-history" ? "this-will-active" : "")} onClick={() => setButtonSelected("trade-history")} ><span className="button-text">Trade History</span></button>
            </Row>
            <Row className="reset-margins-and-padding" style={{ height: "85%" }} >
                <Col className="reset-margins-and-padding" xs="12" style={{ height: "100%" }} >
                    <div className='order-summary-main-table'>
                        {
                            buttonSelected === 'open-orders' ?
                                <BasicTable key={"open-orders"} columns={columnsOpenOrder} data={fakeData} toPaginate={true} />
                                : buttonSelected === "stop-orders" ?
                                    <BasicTable key={"stop-orders"} columns={columnsStopOrder} data={fakeData} toPaginate={true} />
                                    : buttonSelected === "order-history" ?
                                        <BasicTable key={"order-history"} columns={columnsOrderHistory} data={fakeData} toPaginate={true} />
                                        : <BasicTable key={"trade-history"} columns={columnsTradeHistory} data={fakeData} toPaginate={true} />
                        }
                    </div>
                </Col>
            </Row>
        </div>
        // <div>
        //     <h1>Hello World</h1>
        // </div>
    )
}

export default BuyOrSellSection