import "./Bookcase.scss";

const Bookcase = props => {
    return(
        <div id={props.id} className="Bookcase">
            <p className="Bookcase-heading-txt">{props.tag}</p>
            <p className="Bookcase-default-txt">This collection contains {props.books} books.</p>
        </div>
    )
}

export default Bookcase;