import React from "react";
import { Link } from "react-router-dom";

import header from "./header.svg";
import PrimaryButton from "../Button/PrimaryButton";

import "./Header.scss";

const Header = () => {
    return (
        <header className="Header">
            <img className="Header-img" src={header} alt="Woman reading a book"></img>
            <div className="Header-col">
                <h2 className="Header-txt">How many pages have you read today?</h2>
                <label className="Header-txt--label">
                    <input id="pages" className="Header-input" type="number"></input> pages.
                </label>
                <div className="Header-row-btns">
                    <Link to="/profile"><PrimaryButton txt="Save my reading progress" /></Link>
                    <Link to="/profile"><PrimaryButton txt="Don't save it and carry on" /></Link>
                </div>
            </div>
        </header>
    )
}

/* todo: 
1) add event on the btns:
after clicking on any of them, two options will appear: to login in/to create an account
2) center the label with the input
3) adapt input styling
4) handle pages saving (Q for backend: can we/do we have an endpoint where no of pages are updated
    instead of being replaced and added as a reader with a new id? Probably need a relation)
    */


export default Header;