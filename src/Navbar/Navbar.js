import Logo from "./Logo";

import NavButton from "../Button/NavButton";

import "./Navbar.scss";


const Navbar = (props) => {
    const isMainPage = props.isMainPage;
    if (isMainPage) {
        return (
            <nav className="Navbar">
                <Logo />
            </nav>
        )
    } else {
        return (
            <nav className="Navbar">
                <Logo/>
                <NavButton href="/bookcase" class="NavButton--v1" txt="Bookcase" />
                <NavButton href="/habits" class="NavButton--v2" txt="Reading habits" />
                <NavButton href="/profile" class="NavButton--v3" txt="Profile" />
            </nav>
        )
    }
}

export default Navbar;