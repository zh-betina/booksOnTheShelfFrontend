import { Link } from "react-router-dom";

import "./NavButton.scss";

const NavButton = props => {
    return(
        <Link to={props.href}><button onClick={props.event} className={props.class}>{props.txt}</button></Link>
    )
}

export default NavButton;