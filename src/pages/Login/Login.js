import firebase from 'firebase';

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Loader from '../../components/Loader/Loader';

//import { signIn } from "../../components/Header/inputList";
//import saveToLocalStorage from '../../helpers/saveToLocalStorage';

import "./Login.scss";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSignIn = () => {
        setLoader(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setMessage("You've signed in successfully!")
                window.setTimeout(()=>{ history.push("/profile") }, 2500);
            })
            .catch((error) => {
                setLoader(false);
                setMessage(error.message);
            });
    }
    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Sign In</h2>
            <form className="Login-form">
            <p className="txt-primary">{message}</p>
                {
                    loader ? <Loader />
                        :
                        <>
                            <Input event={(e) => setEmail(e.target.value)} name="email" labelTxt="Your e-mail" type="email" />
                            <Input event={(e) => setPassword(e.target.value)} name="password" labelTxt="Your password" type="password" />

                            <PrimaryButton txt="Sign In" event={handleSignIn} />

                            <p className="txt-primary">Don't have an account yet? </p>
                            <Link className="txt-primary" to="/signup">Create your account for FREE</Link>
                        </>
                }
            </form>
        </React.Fragment>
    )
}

export default Login;