import book from "./book.svg";

import "./BookItem.scss";

const BookItem = props => {
    return (
        <div id={props.id} className="BookItem">
            <p className="BookItem-txt BookItem-txt--author">{props.author}</p>
            <p className="BookItem-txt BookItem-txt--title">"{props.title}"</p>
            <img className="BookItem-img" src={book} alt="Book cover"></img>

            <p className="BookItem-txt BookItem-txt--pages">{props.pages}</p>
        </div>
    )
}

export default BookItem;