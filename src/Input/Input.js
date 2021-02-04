import React from "react";

const Input = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.name}>
                {props.labelTxt}
            </label>
            <input onChange={props.event} type={props.type} id={props.name} name={props.name} >
            </input>
        </React.Fragment>
    )
}

export default Input;