import React from "react";
import { Route } from 'react-router-dom';

import MainView from "./MainView/MainView";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Bookcases from "./Bookcases/Bookcases";

import "./Views.scss";


const Views = () => {

    return (
        <React.Fragment>
            <Route path="/" exact component={MainView} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/bookcases" component={Bookcases} />
        </React.Fragment>
    )
}


export default Views;