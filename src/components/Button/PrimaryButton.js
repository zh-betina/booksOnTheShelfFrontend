import "./PrimaryButton.scss";

const PrimaryButton = props =>{
    return(
        <button className="PrimaryButton" onClick={props.event}>{props.txt}</button>
    )
}

export default PrimaryButton;