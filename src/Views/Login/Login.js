import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../Input/Input";
import Navbar from "../../Navbar/Navbar";
import PrimaryButton from "../../Button/PrimaryButton";

import { signIn } from "../../Header/inputList";
import "./Login.scss";

const Login = () => {

    const [inputValue, setInputValue] = useState(null);
    console.log(signIn);
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Sign In</h2>
            <form className="Login-form">
                {
                    signIn.map((items, index) => {
                        return <Input event={(e) => { setInputValue(e.target.value) }} {...items} key={index} />
                    })
                }
                <PrimaryButton txt="Sign In" />
                <p className="txt-primary">Don't have an account yet? </p>
                <Link className="txt-primary" to="/signup">Create your account for FREE</Link>
            </form>
        </React.Fragment>
    )
}

export default Login;