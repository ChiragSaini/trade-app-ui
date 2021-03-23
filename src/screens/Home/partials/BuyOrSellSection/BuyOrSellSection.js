import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Container, Input } from "reactstrap";

import "./BuyOrSellSection.css"

const OrderSummarySection = (props) => {
    const [secondaryButtonSelected, setSecondaryButtonSelected] = useState("limit");

    // const [tooltipOpen, setTooltipOpen] = useState(false);
    // const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div className="buy-or-sell-section">
            <Row className="reset-margins-and-padding" style={{ background: "#f3f3f3", height: "10%" }}>
                {/* <ButtonGroup size="sm" > */}
                <button className={"my-button ripple " + (secondaryButtonSelected === "limit" ? "this-will-active" : "")} onClick={() => setSecondaryButtonSelected("limit")} >Limit</button>
                <button className={"my-button ripple " + (secondaryButtonSelected === "market" ? "this-will-active" : "")} onClick={() => setSecondaryButtonSelected("market")}>Market</button>
                {/* </ButtonGroup> */}
            </Row>
            {
                secondaryButtonSelected === "limit"
                    ?
                    <Container fluid className="mt-2">
                        <Row>
                            <Col lg="6">
                                <Input type="text" className="mt-1" placeholder="Price" id="myinput">
                                </Input>
                                <Input type="text" className="mt-1" placeholder="Amount" />
                                <div className="button-group-centered">
                                    <ButtonGroup size="sm">
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">25%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">50%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">75%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">100%</Button>
                                    </ButtonGroup>
                                </div>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Volume:</span>
                                    <span className="small-gray-text ml-auto">0 BTC</span>
                                </Row>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Advanced: -</span>
                                    <span className="small-gray-text ml-auto"><a href="#">Settings</a></span>
                                </Row>
                                <Button className="buy-sell-button" size="sm" block> <span className="button-text">Buy</span></Button>
                            </Col>
                            <Col lg="6">
                                <Input type="text" className="mt-1" placeholder="Price" />
                                <Input type="text" className="mt-1" placeholder="Amount" />
                                <div className="button-group-centered">
                                    <ButtonGroup size="sm">
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">25%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">50%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">75%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">100%</Button>
                                    </ButtonGroup>
                                </div>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Volume:</span>
                                    <span className="small-gray-text ml-auto">0 BTC</span>
                                </Row>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Advanced: -</span>
                                    <span className="small-gray-text ml-auto"><a href="#">Settings</a></span>
                                </Row>
                                <Button className="buy-sell-button" size="sm" block> <span className="button-text">Sell</span></Button>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Container fluid className="mt-2">
                        <Row >
                            <Col lg="6">
                                <Input type="text" className="mt-1" placeholder="Best Market Price" />
                                <Input type="text" className="mt-1" placeholder="Amount" />
                                <div className="button-group-centered">
                                    <ButtonGroup size="sm">
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">25%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">50%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">75%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success ">100%</Button>
                                    </ButtonGroup>
                                </div>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Volume:</span>
                                    <span className="small-gray-text ml-auto">0 BTC</span>
                                </Row>
                                <Button className="buy-sell-button" size="sm" block> <span className="button-text">Buy</span></Button>
                            </Col>
                            <Col lg="6">
                                <Input type="text" className="mt-1" placeholder="Price" />
                                <Input type="text" className="mt-1" placeholder="Amount" />
                                <div className="button-group-centered">
                                    <ButtonGroup size="sm">
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">25%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">50%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">75%</Button>
                                        <Button className="percentage-select-button" style={{ margin: "2px" }} color="success">100%</Button>
                                    </ButtonGroup>
                                </div>
                                <Row className="reset-margins-and-padding">
                                    <span className="small-gray-text mr-auto">Volume:</span>
                                    <span className="small-gray-text ml-auto">0 BTC</span>
                                </Row>
                                <Button className="buy-sell-button" size="sm" block> <span className="button-text">Sell</span></Button>
                            </Col>
                        </Row>
                    </Container>
            }
        </div >
    )
}

export default OrderSummarySection;
/*
<Row className="reset-margins-and-padding" style={{ background: "#f3f3f3" }}>
                <ButtonGroup size="sm" >
                    <Button className="algo-select-button" onClick={() => setSecondaryButtonSelected("limit")} active={secondaryButtonSelected === "limit"}><span className="button-text">Limit</span></Button>
                    <Button className="algo-select-button" onClick={() => setSecondaryButtonSelected("market")} active={secondaryButtonSelected === "market"}><span className="button-text">Market</span></Button>
                </ButtonGroup>
            </Row>
            {
                secondaryButtonSelected === "limit" ?
                    <Row className="reset-margins-and-padding" style={{ padding: "5px" }}>
                        <Col className="reset-margins-and-padding" style={{ margin: "5px" }}>
                            <Row className="reset-margins-and-padding">
                                <Input placeholder="BTC" size="sm" className="mb-1" />
                                <Input placeholder="Amount" size="sm" />
                                <ButtonGroup size="sm">
                                    <Button color="light">25%</Button>
                                    <Button color="light">50%</Button>
                                    <Button color="light">75%</Button>
                                    <Button color="light">100%</Button>
                                </ButtonGroup>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Volume:</span>
                                <span className="small-gray-text ml-auto">0 BTC</span>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Advanced: -</span>
                                <span className="small-gray-text ml-auto"><a href="#">Settings</a></span>
                            </Row>
                            <Button className="buy-sell-button" size="sm" block> <span className="button-text">Buy</span></Button>
                        </Col>
                        <Col className="reset-margins-and-padding" style={{ margin: "5px" }}>
                            <Row className="reset-margins-and-padding">
                                <Input placeholder="BTC" size="sm" className="mb-1" />
                                <Input placeholder="Amount" size="sm" />
                                <ButtonGroup size="sm">
                                    <Button color="light" className="my-gray-button" >25%</Button>
                                    <Button color="light" className="my-gray-button" >50%</Button>
                                    <Button color="light" className="my-gray-button" >75%</Button>
                                    <Button color="light" className="my-gray-button" >100%</Button>
                                </ButtonGroup>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Volume:</span>
                                <span className="small-gray-text ml-auto">0 BTC</span>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Advanced: -</span>
                                <span className="small-gray-text ml-auto"><a href="#">Settings</a></span>
                            </Row>
                            <Button className="buy-sell-button" size="sm" block> <span className="button-text">Sell</span></Button>
                        </Col>
                    </Row> :
                    <Row className="reset-margins-and-padding" style={{ padding: "5px" }}>
                        <Col className="reset-margins-and-padding" style={{ margin: "5px" }}>
                            <Row className="reset-margins-and-padding">
                                <Input placeholder="Best Market Price" size="sm" className="mb-1" />
                                <Input placeholder="Amount" size="sm" />
                                <ButtonGroup>
                                    <Button color="light" size="sm">25%</Button>
                                    <Button color="light" size="sm">50%</Button>
                                    <Button color="light" size="sm">75%</Button>
                                    <Button color="light" size="sm">100%</Button>
                                </ButtonGroup>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Volume:</span>
                                <span className="small-gray-text ml-auto">0 BTC</span>
                            </Row>
                            <Button className="buy-sell-button" size="sm" block> <span className="button-text">Buy</span></Button>
                        </Col>
                        <Col className="reset-margins-and-padding" style={{ margin: "5px" }}>
                            <Row className="reset-margins-and-padding">
                                <Input placeholder="Best Market Price" size="sm" className="mb-1" />
                                <Input placeholder="Amount" size="sm" />
                                <ButtonGroup>
                                    <Button color="light" size="sm">25%</Button>
                                    <Button color="light" size="sm">50%</Button>
                                    <Button color="light" size="sm">75%</Button>
                                    <Button color="light" size="sm">100%</Button>
                                </ButtonGroup>
                            </Row>
                            <Row className="reset-margins-and-padding">
                                <span className="small-gray-text mr-auto">Volume:</span>
                                <span className="small-gray-text ml-auto">Calculated After Final trades</span>
                            </Row>
                            <Button className="buy-sell-button" size="sm" block> <span className="button-text">Sell</span></Button>
                        </Col>
                    </Row>
            }
*/