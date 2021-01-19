import github from "./github.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <p className="Footer-txt">Kindly coded by</p>
            <div className="row">
                    <img className="Footer-icon" src={github} alt="Github icon"></img>
                    <a className="Footer-link" href="https://github.com/zh-betina/" target="_blank" rel="noreferrer">zh-betina</a>
                    <img className="Footer-icon" src={github} alt="Github icon"></img>
                    <a className="Footer-link" href="https://github.com/ganzes" target="_blank" rel="noreferrer">ganzes</a>
            </div>

        </footer>
    )
}

export default Footer;