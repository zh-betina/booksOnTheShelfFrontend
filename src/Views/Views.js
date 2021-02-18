import React from "react";
import { Route } from 'react-router-dom';

import MainView from "./MainView/MainView";
import Profile from "./Profile/Profile";
//import LoginForm from "../SignIn_SignUp/LoginForm";

import "./Views.scss";


const Views = () => {

    return (
        <React.Fragment>
            <Route path="/" exact component={MainView} />
            <Route path="/profile" component={Profile} /> 
        </React.Fragment>
    )
}

//todo <Route path="/login" component={LoginForm} />


export default Views;