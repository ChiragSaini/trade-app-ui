import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

import "./Tooltip_Button.css"

const Tooltip_button = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <label type="button" id={props.text} className="btn" color="#fff">
                {
                    props.link ? <img src={props.link}></img> : <i className={props.icon}></i>
                }
            </label>
            <Tooltip color="#fff" style={{ background: "#fff", color: "#000" }} placement="bottom" isOpen={tooltipOpen} target={props.text} toggle={toggle}>
                {props.text}
            </Tooltip>
        </div>
    );
}

export default Tooltip_button;