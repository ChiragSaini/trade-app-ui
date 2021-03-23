import React from 'react'
import BasicTable from "../../../../components/BasicTable"
import { Row, Col } from "reactstrap";
import "./OrderBook.css"

const columnsUpper = [
    {
        Header: "Price(BTC)",
        accessor: "price",
        Cell: (({ row }) => {
            return (
                <span style={{ color: "red" }}>{row.values.price}</span>
            )
        })
    },
    {
        Header: "Amount(XRP)",
        accessor: "amount"
    },
    {
        Header: "Total(XRP)",
        accessor: "total"
    }
]

const columnsLower = [
    {
        Header: "Price(BTC)",
        accessor: "price",
        Cell: (({ row }) => {
            return (
                <span style={{ color: "#24AE8F" }}>{row.values.price}</span>
            )
        })
    },
    {
        Header: "Amount(XRP)",
        accessor: "amount"
    },
    {
        Header: "Total(XRP)",
        accessor: "total"
    }
]

const data = [
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    }, {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },
    {
        price: 0.00030438,
        amount: 50.3123,
        total: 528.9012
    },

]

const OrderBook = () => {
    return (
        <div className="order-book-main">
            <Row className="reset-margins-and-padding order-book-main-first-row">
                <Col sm="6" className="reset-margins-and-padding" style={{ borderRight: "5px solid #e3e3e3", borderBottom: "1px solid #e3e3e3" }}>
                    <div style={{ paddingLeft: "5%" }}>
                        <strong className="order-book-main-heading">Order Book</strong>
                    </div>
                </Col>
                <Col sm="6" className="reset-margins-and-padding order-book-main-buttons" >
                    <div>
                        <strong className="order-book-main-trade-history">Trade History</strong>
                    </div>
                    <div className="trade-history-buttons">
                        <strong><a className="green-accent-button">Recent Trades</a></strong>
                        <strong><a className="market-depth-button">Market Depth</a></strong>
                    </div>
                </Col>
            </Row>
            <Row className="reset-margins-and-padding order-book-main-second-row">
                <Col sm="6" className="reset-margins-and-padding" style={{ height: "100%", borderRight: "5px solid #e3e3e3" }}>
                    <div className="box">
                        <BasicTable data={data} columns={columnsUpper} hideth={false} scrollToBottom={true} addPopover={true} />
                    </div>
                    <div style={{ borderTop: "2px solid #e3e3e3", borderBottom: "2px solid #e3e3e3", paddingLeft: "5%" }}>
                        <span>Average:<strong>0.00002446</strong><small>≈ 0.28565 USD</small></span>
                    </div>
                    <div className="box">
                        <BasicTable data={data} columns={columnsLower} hideth={true} addPopover={true} />
                    </div>
                </Col>
                <Col sm="6" className="reset-margins-and-padding" style={{ height: "100%" }}>
                    <div className="big-box">
                        <BasicTable data={data} columns={columnsLower} hideth={false} />
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default OrderBook