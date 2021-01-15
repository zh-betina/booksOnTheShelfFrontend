import React, { useState } from "react";
import "./Views.scss";
import MainView from "./MainView/MainView";

const Views = () => {
    let isPageActive = {
        "homepage": true,
        "profile": false,
        "readingHabits": false,
        "bookcase": false
    }


    return(
        <MainView pageState={isPageActive.homepage}/>
    )
}

export default Views;