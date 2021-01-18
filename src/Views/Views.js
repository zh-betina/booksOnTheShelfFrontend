import React from "react";
import { Route } from 'react-router-dom';

import MainView from "./MainView/MainView";
import Profile from "./Profile/Profile";

import "./Views.scss";


const Views = () => {

    return (
        <React.Fragment>
            <Route path="/" exact component={MainView} />
            <Route path="/profile" component={Profile} /> 
        </React.Fragment>
    )
}

export default Views;