import React, { useState } from 'react';
import { Link } from "react-router-dom";
import fire from '../../firebase/fire';
import Logo from "./Logo";

import NavButton from "../Button/NavButton";

import "./Navbar.scss";


const Navbar = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    fire.auth().onAuthStateChanged((user) => {
        return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    const signOut = ()=> {
        fire.auth().signOut();
    }

    const isMainPage = props.isMainPage;
    if (isMainPage) {
        return (
            <nav className="Navbar">
                <Link to="/"><Logo /></Link>
            </nav>
        )
    } else {
        return (
            <nav className="Navbar">
                <Link to="/"><Logo /></Link>
                <div>
                    <NavButton href="/bookcases" class="NavButton--v1" txt="Bookcases" />
                    <NavButton href="/habits" class="NavButton--v2" txt="Reading habits" />
                    <NavButton href="/profile" class="NavButton--v3" txt="Profile" />
                    {isLoggedIn ?
                        <NavButton event={signOut} href="#" class="NavButton--v1" txt="Sign out" />
                        : null}
                </div>
            </nav>
        )
    }
}

export default Navbar;