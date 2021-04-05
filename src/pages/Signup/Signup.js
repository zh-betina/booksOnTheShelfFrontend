import firebase from 'firebase';
import firebaseConfig from '../../services/firebaseConfig';

import React, { useState } from "react";
import { useHistory } from 'react-router';

import Input from '../../components/Input/Input';
import Navbar from '../../components/Navbar/Navbar';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Loader from '../../components/Loader/Loader';

//import axios from '../../services/axios';
//import { signUp } from '../../components/Header/inputList';

firebase.initializeApp(firebaseConfig);


const Signup = () => {
    //const [userName, setUserName] = useState(null);
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState({ isError: false });
    const [successMsg, setSuccessMsg] = useState({ isSuccess: false });
    //const [createdId, setCreatedId] = useState(false);
    //const [id, setId] = useState(null);
    const history = useHistory();

    const handleSignup = e => {
        e.preventDefault();
        setLoader(true);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setLoader(false);
                setErrorMsg({ isError: false});
                setSuccessMsg({ isSuccess: true, message: "Your account has been created. You'll be redirected to the login page in a while..."})
                window.setTimeout(()=>{ history.push("/login") }, 2500);
            })
            .catch(error => {
                setLoader(false);
                setErrorMsg({ isError: true, message: error.message });
            });
        /*axios.post('/reader', data)
            .then(res=>{
                setId(res.data.id);
                setLoader(false);
                setCreatedId(true);
            });
            */
    }

    return (
        <React.Fragment>
            <Navbar isMainPage={true} />
            <h2 className="heading--secondary">Create your account</h2>
            <form className="Login-form">
                {
                    loader ? <Loader /> :
                        <>
                            <Input event={(e) => setEmail(e.target.value)} name="email" labelTxt="Your e-mail" type="email" />
                            <Input event={(e) => setPassword(e.target.value)} name="password" labelTxt="Your password" type="password" />
                            <PrimaryButton txt="Confirm" event={(e) => handleSignup(e)} />
                        </>
                }
                {
                    errorMsg.isError ?
                        <p className="txt-primary">{errorMsg.message}</p>
                        : null
                }
                {
                    successMsg.isSuccess ?
                    <p className="txt-primary">{successMsg.message}</p>
                    : null
                }

            </form>
        </React.Fragment>
    )
}

export default Signup;