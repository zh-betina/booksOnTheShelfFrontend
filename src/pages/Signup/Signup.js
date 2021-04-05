import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../../Input/Input";
import Navbar from "../../Navbar/Navbar";
import PrimaryButton from "../../Button/PrimaryButton";
import Loader from "../../Loader/Loader";

import getList from "../functions/getList";
import { signUp } from "../../Header/inputList";

const Signup = () => {
    const [userName, setUserName] = useState(null);
    const [loader, setLoader] = useState(false);
    const [createdId, setCreatedId] = useState(false);
    const [id, setId] = useState(null);
    const url = `https://booksontheshelfbackend.herokuapp.com/botsab/reader`;
    const method = 'POST';
    const data = userName;

    const handleSignup = (e) => {
        e.preventDefault();
        setLoader(true);
        getList(data, url, method)
            .then(data=>{
                setId(data.id);
                setLoader(false);
                setCreatedId(true);
            });
    }

    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Create your account</h2>
            <form className="Login-form">
                { loader ? <Loader /> :
                                signUp.map((items, index) => {
                                    return <Input event={(e) => { setUserName({ "name": e.target.value }) }} {...items} key={index} />
                                })
                }
                <PrimaryButton txt="Confirm" event={(e)=> handleSignup(e)} />
                {
                    createdId ? <React.Fragment>
                        <p className="txt-primary">Your ID has been assigned and it equals {id}.</p>
                        <p className="txt-primary">Please, remember it. You'll need it to</p>
                        <Link className="txt-primary" to="/login">LOG INTO YOUR ACCOUNT</Link>
                    </React.Fragment> : null
                }
            </form>
        </React.Fragment>
    )
}

export default Signup;