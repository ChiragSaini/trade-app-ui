import React, { useState } from 'react'
import { Row, Col } from "reactstrap"

const MultiWindowChart = ({ selectedCurrencies }) => {
    return (
        <>
            <Col style={{ margin: "0", padding: "0" }}>
                <div className="h-50 bg-primary" >
                    <h3>
                        {
                            selectedCurrencies[0] ? `Chart for ${selectedCurrencies[0]}` : "Select a Currency"
                        }
                    </h3>
                </div>
                <div className="h-50 bg-success" >
                    <h3>
                        {
                            selectedCurrencies[1] ? `Chart for ${selectedCurrencies[1]}` : "Select a Currency"
                        }
                    </h3>
                </div>
            </Col>
            <Col style={{ margin: "0", padding: "0" }}>
                <div className="h-50 bg-light" >
                    <h3>
                        {
                            selectedCurrencies[2] ? `Chart for ${selectedCurrencies[2]}` : "Select a Currency"
                        }
                    </h3>
                </div>
                <div className="h-50 bg-warning" >
                    <h3>
                        {
                            selectedCurrencies[3] ? `Chart for ${selectedCurrencies[3]}` : "Select a Currency"
                        }
                    </h3>
                </div>
            </Col>
        </>
    )
}

export default MultiWindowChart
