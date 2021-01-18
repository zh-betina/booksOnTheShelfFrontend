import React from "react";
import { Link } from "react-router-dom";

import header from "./Header.svg";
import PrimaryButton from "../Button/PrimaryButton";

import "./Header.scss";

const Header = () => {
    return (
        <header className="Header">
            <img src={header} alt="Woman reading a book" className="Header-svg"></img>
            <div className="Header-col">
                <h2 className="Header-txt">How many pages have you read today?</h2>
                <label className="Header-txt--label">
                    <input className="Header-input" type="number"></input> pages.
                </label>
            </div>
            <div className="Header-col">
                <PrimaryButton txt="Save my reading progress" />
                <PrimaryButton txt="Don't save it and carry on" />
            </div>
        </header>
    )
}

export default Header;