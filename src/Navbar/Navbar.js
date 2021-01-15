import "./Navbar.scss";
import logo from "./logo.svg";


const Navbar = (props) => {
    return(
        <nav className="Navbar">
            <img src={logo} class="Navbar-logo" alt="Logo"></img>
            <h1 className="Logo-txt">BooksOn<span className="Logo-txt--low">theShelf</span></h1>
        </nav>
    )
}

export default Navbar;