import "./Bookcase.scss";

const Bookcase = props => {
    const nbOfBooks = props.books.length;
    return(
        <div id={props.id} className="Bookcase">
            <p className="Bookcase-heading-txt">{props.tag}</p>
            <p className="Bookcase-default-txt">This collection contains {nbOfBooks} books.</p>
        </div>
    )
}

export default Bookcase;