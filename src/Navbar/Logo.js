import React from "react";

import logo from "./logo.svg";

import "./Logo.scss";

const Logo = () => {
    return (
        <React.Fragment>
            <img src={logo} class="Logo" alt="Logo"></img>
            <h1 className="Logo-txt">BooksOn<span className="Logo-txt--low">theShelf</span></h1>
        </React.Fragment>
    )
}

export default Logo;