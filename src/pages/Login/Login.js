import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';

import { signIn } from "../../components/Header/inputList";
import saveToLocalStorage from '../../helpers/saveToLocalStorage';

import "./Login.scss";


const Login = props => {
    const history = useHistory();
    const [userId, setUserId] = useState(null);

    const handleSignIn = () => {
        saveToLocalStorage("userId", props.userId);
        history.push('/profile');
    }
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Sign In</h2>
            <form className="Login-form">
                {
                    signIn.map((items, index) => {
                        return <Input event={(e) => console.log(e) } {...items} key={index} />
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