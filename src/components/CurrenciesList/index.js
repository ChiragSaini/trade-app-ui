import React, { useState, useEffect } from 'react';
import { Button, PopoverHeader, PopoverBody, Input, UncontrolledPopover } from 'reactstrap';
import BasicTable from "../BasicTable"
import "./styles.css"

const CurrenciesList = ({ selectedCurrencies, setSelectedCurrencies }) => {
    const [searchedText, setSearchedText] = useState("");
    const [toBeShowData, setToBeShowData] = useState([]);


    const columns = React.useMemo(() => [
        {
            Header: "Pair",
            accessor: "pair"
        },
        {
            Header: "Change",
            accessor: "change"
        }
    ])

    const data = [
        {
            pair: "XTZ/BTC",
            change: "+9.31%"
        },
        {
            pair: "DOT/BTC",
            change: "+6.81%"
        },
        {
            pair: "OCEAN/BTC",
            change: "-7.15%"
        },
        {
            pair: "NIM/BTC",
            change: "+3.41%"
        },
        {
            pair: "SXP/BTC",
            change: "+0.31%"
        },
        {
            pair: "XTZ/BTC",
            change: "+9.31%"
        },
        {
            pair: "DOT/BTC",
            change: "+6.81%"
        },
        {
            pair: "OCEAN/BTC",
            change: "-7.15%"
        },
        {
            pair: "NIM/BTC",
            change: "+3.41%"
        },
        {
            pair: "SXP/BTC",
            change: "+0.31%"
        },
        {
            pair: "XTZ/BTC",
            change: "+9.31%"
        },
        {
            pair: "DOT/BTC",
            change: "+6.81%"
        },
        {
            pair: "OCEAN/BTC",
            change: "-7.15%"
        },
        {
            pair: "NIM/BTC",
            change: "+3.41%"
        },
        {
            pair: "SXP/BTC",
            change: "+0.31%"
        },
        {
            pair: "ABC/DEF",
            change: "+8.98%"
        },
        {
            pair: "GHI/JKL",
            change: "-5.29%"
        },
        {
            pair: "MNO/PQR",
            change: "-5.29%"
        },
        {
            pair: "STU/VWX",
            change: "-5.29%"
        },
        {
            pair: "LOL/LOL",
            change: "-5.29%"
        },
    ]

    const handleSearch = (e) => {
        setSearchedText(e.target.value)
    }


    useEffect(() => {
        let temp = []
        if (searchedText === "") {
            temp = data
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].pair.toLowerCase().includes(searchedText)) {
                    temp.push(data[i])
                }
            }
        }
        console.log(temp)
        setToBeShowData(temp)
    }, [searchedText])

    const handleSelectedCurrencies = (e) => {
        e.persist()
        try {
            if (e.target.textContent !== null && !selectedCurrencies.includes(e.target.textContent) && !e.target.textContent.startsWith("-") && !e.target.textContent.startsWith("+") && !e.target.textContent.startsWith("Pair") && !e.target.textContent.startsWith("Change")) {
                setSelectedCurrencies(prevState => [...prevState, e.target.textContent])
            }
        } catch (error) {
            console.log(error)
        }
        console.log(e.target.textContent)
    }

    return (
        <div className="currencies-dropdown-menu">
            <Button id="Popover1" type="button" className="currencies-select-button">
                Currencies <i className="fa fa-arrow-down fa-xs" style={{ opacity: "0.7" }} />
            </Button>
            {/* <Popover trigger="legacy" hideArrow={false} placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}> */}
            <UncontrolledPopover trigger="legacy" hideArrow={false} placement="bottom" target="Popover1" >
                <PopoverHeader>
                    <Input type="text" placeholder="Search" onChange={handleSearch} />
                </PopoverHeader>
                <PopoverBody>
                    <div className="currencies-table">
                        <BasicTable onRowClick={handleSelectedCurrencies} key={toBeShowData.length} columns={columns} data={toBeShowData} />
                    </div>
                </PopoverBody>
            </UncontrolledPopover >
            {/* </Popover> */}
        </div>
    );
}

export default CurrenciesList;