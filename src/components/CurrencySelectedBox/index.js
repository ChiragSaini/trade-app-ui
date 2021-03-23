import React from 'react';
import "./styles.css";


const CurrencySelectedBox = ({ value, removeFromSelectedCurrencies, selected, idx, setSelected }) => {
    return (
        <div onClick={() => setSelected(idx)} className={selected ? "currently-selected currency-box" : "currency-box"}>
            <div className="reset-margins-and-padding currency-name-and-value">
                <span className="text-left">{value}&nbsp;</span>
                {/* <small>{`${9.17} USD`}</small> */}
            </div>
            <button className="btn" value={value} onClick={removeFromSelectedCurrencies}>
                <i value={value} className="fa fa-times fa-xs"></i>
            </button>
        </div>
    )
}

export default CurrencySelectedBox