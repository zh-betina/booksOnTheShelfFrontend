import React from "react";

import "./Input.scss";

const Input = props => {
    return (
        <React.Fragment>
            <label className="Input-label" htmlFor={props.name}>
                {props.labelTxt}
            </label>
            <input className="Input-field" onChange={props.event} type={props.type} id={props.name} name={props.name} >
            </input>
        </React.Fragment>
    )
}

export default Input;