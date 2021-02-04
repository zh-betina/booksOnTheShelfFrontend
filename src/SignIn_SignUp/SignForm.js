import React, { useState } from "react";

import Input from "../Input/Input";
import PrimaryButton from "../Button/PrimaryButton";

import "./SignForm.scss";
import getList from "../Views/functions/getList";

const SignForm = props => {
    const[inputValue, setInputValue] = useState(null);

    let inputStatus;
    if(props.input == null){
        inputStatus = false;
    }else{
        inputStatus = true;
    }
    let urlStatus;
    if(props.url == null){
        urlStatus = false;
    }else{
        urlStatus = true;
    }

    const handleSendingData = ()=>{
        props.data.name = inputValue;
        let method = props.method;
        let url = props.url;
        getList(props.data, url, method)
        .then((data)=>{
            console.log(data)
        });
    }

    return (
        <div className={props.class}>
            <h2 className="SignForm-heading">{props.title}</h2>
            <form className="SignForm-form">
                {   
                    inputStatus ? 
                    props.input.map((items, index)=>{
                        return <Input event={(e)=>{setInputValue(e.target.value)}} {...items} key={index}/>
                    })
                    : null
                }
            </form>
            <PrimaryButton event={urlStatus ? ()=>handleSendingData() : null} txt={props.btnTxt1}/>
            <PrimaryButton event={props.event} txt={props.btnTxt2}/>
        </div>
    )
}

export default SignForm;