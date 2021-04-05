import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../Input/Input";
import Navbar from "../../Navbar/Navbar";
import PrimaryButton from "../../Button/PrimaryButton";

import { signIn } from "../../Header/inputList";
import saveToLocalStorage from "../functions/saveToLocalStorage";

import "./Login.scss";


const Login = () => {
    const history = useHistory();
    const [userId, setUserId] = useState(null);

    const handleSignIn = () => {
        saveToLocalStorage("userId", userId);
        history.push('/profile');
    }
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Sign In</h2>
            <form className="Login-form">
                {
                    signIn.map((items, index) => {
                        return <Input event={(e) => { setUserId(e.target.value) }} {...items} key={index} />
                    })
                }
                <PrimaryButton txt="Sign In" event={handleSignIn} />
                <p className="txt-primary">Don't have an account yet? </p>
                <Link className="txt-primary" to="/signup">Create your account for FREE</Link>
            </form>
        </React.Fragment>
    )
}

export default Login;