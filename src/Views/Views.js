import React from "react";
import { Route } from 'react-router-dom';

import MainView from "./MainView/MainView";

import "./Views.scss";


const Views = () => {

    return (
        <React.Fragment>
            <Route path="/" exact component={MainView} />
        </React.Fragment>
    )
}

export default Views;