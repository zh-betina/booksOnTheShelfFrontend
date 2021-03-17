import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import Input from "../../Input/Input";
import Navbar from "../../Navbar/Navbar";
import PrimaryButton from "../../Button/PrimaryButton";

import * as actionTypes from "../../store/actions";
import { signIn } from "../../Header/inputList";
import saveToLocalStorage from "../functions/saveToLocalStorage";

import "./Login.scss";
import { findRenderedComponentWithType } from "react-dom/test-utils";


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
                        return <Input event={(e) => props.onLogin(e.target.value) } {...items} key={index} />
                    })
                }
                <PrimaryButton txt="Sign In" event={handleSignIn} />
                <p className="txt-primary">Don't have an account yet? </p>
                <Link className="txt-primary" to="/signup">Create your account for FREE</Link>
            </form>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return{
        userId: state.id
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onLogin: (value) => {
            dispatch({type: actionTypes.SAVE_ID, idValue: value })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);