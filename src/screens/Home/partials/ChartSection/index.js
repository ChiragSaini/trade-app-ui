import React, { useState } from 'react'
import "./styles.css"
import CurrentSelectedBox from "../../../../components/CurrencySelectedBox";
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Row } from "reactstrap"
import { fakeData } from "./fakeChartData"

const ChartSection = ({ selectedCurrencies, removeFromSelectedCurrencies }) => {
    const [selected, setSelected] = useState(0);
    const data = fakeData;
    const options = {
        chart: {
            zoomType: 'x',
            backgroundColor: "#f3f3f3",
            width: 810,
            reflow: true,
            plotBorderColor: "#eee",
            marginRight: 0
        },
        title: {
            text: 'USD to EUR exchange rate over time'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
        },
        yAxis: {
            title: {
                text: 'Exchange rate'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data
        }]
    }
    return (
        <div className="main-chart-section">
            <Row className="reset-margins-and-padding currencies-row">
                <button className="btn window-size-select-button"><i className="fa fa-lg fa-dollar-sign"></i></button>
                {
                    selectedCurrencies.length === 0
                        ?
                        <p>No Currencies Selected</p>
                        : <>
                            {
                                selectedCurrencies.map((c, idx) => <CurrentSelectedBox value={c} key={idx} removeFromSelectedCurrencies={removeFromSelectedCurrencies} selected={selected === idx} idx={idx} setSelected={setSelected} />)
                            }
                        </>
                }
            </Row>
            <Row className="reset-margins-and-padding chart-row">
                {
                    // chartWindow === "single"
                    // ?
                    // <h1>{selectedCurrencies[selected] ? `Chart for ${selectedCurrencies[selected]}` : "No Currency Selected. Select some from Dropdown."}</h1>
                    // :
                    // <MultiWindowChart selectedCurrencies={selectedCurrencies} />
                }
                <HighchartsReact width={"100%"} highcharts={Highcharts} options={options} />
            </Row>
        </div>
    )
}

export default ChartSection