import React, { useState } from "react";

import header from "./header.png";
import PrimaryButton from "../Button/PrimaryButton";

import { signIn, signUp } from "../Header/inputList";


import "./Header.scss";
import SignForm from "../SignIn_SignUp/SignForm";

const Header = () => {
    const[signInUp, setSignInUp] = useState({
        classInput: "hidden", 
        classHeader: "Header-col", 
        title: null, 
        input: null, 
        btnTxt1: null, 
        btnTxt2: null, 
        eventFunc: null,
        url: null});
    const[data, setData] = useState({pages: [null], name: null})

    const handleClick = ()=>{
        setSignInUp({
            classInput: "SignForm", 
            classHeader: "hidden", 
            title: "Sign In", 
            input: signIn, 
            btnTxt1: "Sign in", 
            btnTxt2: "Go back to create an account", 
            eventFunc: toSignUp,
            method: "POST",
            data: data,
            url: "https://booksontheshelfbackend.herokuapp.com/botsab/reader"})
    }

    const toSignUp = ()=>{
        setSignInUp({
            classInput: "SignForm", 
            classHeader: "hidden", 
            title: "Sign Up", 
            input: signUp, 
            btnTxt1: "Sign Up", 
            btnTxt2: "Go back to login page", 
            eventFunc: handleClick,
            method: "POST",
            data: data,
            url: "https://booksontheshelfbackend.herokuapp.com/botsab/reader"})
    }

    return (
        <header className="Header">
            <img className="Header-img" src={header} alt="Woman reading a book"></img>
            <div className={signInUp.classHeader}>
                <h2 className="Header-txt">How many pages have you read today?</h2>
                <label className="Header-txt--label">
                    <input 
                        onChange={(e)=>{setData({pages: [parseInt(e.target.value)], name: null})}} 
                        id="pages" 
                        className="Header-input" 
                        type="number"></input> pages.
                </label>
                <div className="Header-row-btns">
                    <PrimaryButton event={()=>{handleClick()}} txt="Save my reading progress" />
                    <PrimaryButton event={()=>{handleClick()}} txt="Don't save it and carry on" />
                </div>
            </div>
            <SignForm 
                class={signInUp.classInput} 
                event={()=>{signInUp.eventFunc()}} 
                title={signInUp.title} 
                input={signInUp.input} 
                btnTxt1={signInUp.btnTxt1} 
                btnTxt2={signInUp.btnTxt2}
                data={data}
                url={signInUp.url}
                method={signInUp.method}/>
        </header>
    )
}

/* todo: 
1) add event on the btns:
after clicking on any of them, two options will appear: to login in/to create an account
2) center the label with the input
3) adapt input styling
4) handle pages saving (Q for backend: can we/do we have an endpoint where no of pages are updated
    instead of being replaced and added as a reader with a new id? Probably need a relation)
    */


export default Header;