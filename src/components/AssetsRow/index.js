import React from 'react';
import "./styles.css"
import { Link } from 'react-router-dom'
import { Row, Col } from "reactstrap";

const AssetsRow = ({ value }) => {
    return (
        <Row className="assets-row">
            <Col md="2" >
                <img src={value.src} alt="" style={{ marginLeft: "0" }} />
                <span>{value.name}</span>
            </Col>
            <Col md="2">
                <span>{value.total}</span>
            </Col>
            <Col md="2">
                <span>{value.available}</span>
            </Col>
            <Col md="2">
                <span>{value.inorders}</span>
            </Col>
            <Col md="4">
                {
                    value.operations.map(op => <Link to={op.url} style={{ marginRight: "10px" }}>{op.name}</Link>)
                }
            </Col>
        </Row >
    )
}

export default AssetsRow
