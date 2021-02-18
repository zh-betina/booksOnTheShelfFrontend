import React, { useState } from "react";

import Input from "../Input/Input";
import PrimaryButton from "../Button/PrimaryButton";

import "./SignForm.scss";
import getList from "../Views/functions/getList";

const SignForm = props => {
    const [inputValue, setInputValue] = useState(null);
    const [signUpState, setSignUpState] = useState(false);
    const [userId, setUserId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let inputStatus;
    if (props.input == null) {
        inputStatus = false;
    } else {
        inputStatus = true;
    }
    let urlStatus;
    if (props.url == null) {
        urlStatus = false;
    } else {
        urlStatus = true;
    }

    const handleSendingData = () => {
        props.data.name = inputValue;
        let method = props.method;
        let url = props.url;
        getList(props.data, url, method)
            .then((data) => {
                setUserId(data.id)
            })
            .then((data) => {
                setSignUpState(true)
            });
    }

    return (
        <div className={props.class}>
            <h2 className="SignForm-heading">{props.title}</h2>
            {
                signUpState ? null :
                    <React.Fragment>
                        <form className="SignForm-form">
                            {
                                inputStatus ?
                                    props.input.map((items, index) => {
                                        return <Input event={(e) => { setInputValue(e.target.value) }} {...items} key={index} />
                                    })
                                    : null
                            }
                        </form>
                        <PrimaryButton event={urlStatus ? () => handleSendingData() : null} txt={props.btnTxt1} />
                        <PrimaryButton event={props.event} txt={props.btnTxt2} />
                    </React.Fragment>
            }


            {
                signUpState ?
                    <div className="info-account"><p className="txt-primary">Your user profile has been created.</p>
                        <p className="txt-primary">Your ID number equals {userId}.</p>
                        <p className="txt-primary">Remember it for accessing your profile, as accounts protected with password functionality
                    has not been developed yet. Thank you for your understanding!</p></div> : null
            }
        </div>
    )
}

//todo : redirect to loginpage

export default SignForm;