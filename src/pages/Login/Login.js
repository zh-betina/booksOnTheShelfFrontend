import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fire from '../../firebase/fire';

import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Loader from '../../components/Loader/Loader';

//import { signIn } from "../../components/Header/inputList";
//import saveToLocalStorage from '../../helpers/saveToLocalStorage';

import "./Login.scss";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setLoader(true);
        fire.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
          console.error('Incorrect username or password');
        })
        .then(()=> {
            setLoader(false);
        });
    }

    return (
        <>
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

                            <PrimaryButton txt="Sign In" event={handleSubmit} />

                            <p className="txt-primary">Don't have an account yet? </p>
                            <Link className="txt-primary" to="/signup">Create your account for FREE</Link>
                        </>
                }
            </form>
        </>
    )
}

export default Login;