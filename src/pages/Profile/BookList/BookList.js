import "./BookList.scss";

const BookList = props => {
    return (
        <div className="BookList">
            <h3 className="BookList-heading">{props.heading}</h3>
            <div className="BookList-wrapper">
                {props.children}
            </div>
        </div>
    )
}

export default BookList;