import React, { useState, useEffect } from "react";

import Navbar from '../../components/Navbar/Navbar';
import BookList from './BookList/BookList';
import BookItem from "./BookList/BookItem";

import book from "./BookList/book.svg";

import getList from "./BookList/getList";
import "./Profile.scss";

const Profile = props => {

    const [booklist, setBooklist] = useState([{ id: null, author: null, title: null, img: null, pages: null }]);
    const [pages, setPages] = useState(Math.floor(Math.random() * 1200));
    const [userName, setUserName] = useState("Guest Reader");
    useEffect(() => {
        let data;
        const method = "GET";
        const url = `https://booksontheshelfbackend.herokuapp.com/botsab/reader?id=${props.userId}`;
        getList(data, url, method)
            .then((data) => {
                console.log(data);
                setUserName(data.name);
                const loadedBooks = [];
                for (const key in data.books) {
                    loadedBooks.push({
                        id: data.books[key].id,
                        author: data.books[key].author,
                        title: data.books[key].title,
                        pages: data.books[key].pages
                    });
                };
                setBooklist(loadedBooks);
                //setPages(data.pages[0].pagesRead)
            });
    }, []);
    return (
        <React.Fragment>
            <Navbar isMainPage={false} />
            <section className="Profile-heading">
                <h2 className="Profile-heading-txt">Hi, {userName}!</h2>
                <p className="txt-primary">
                    <select>
                        <option className="txt-primary" value="year">This year</option>
                        <option className="txt-primary" value="month">This month</option>
                        <option className="txt-primary" value="today">Today</option></select>
                you've read {pages} pages in total.
                </p>
            </section>
            <section className="Profile-books">
                <BookList heading="Recently read:">
                    {
                        booklist.map((items, index) => {
                            return <BookItem {...items} key={index} img={book} />
                        })
                    }
                </BookList>
                <BookList heading="Reading:">
                    {
                        booklist.map((items, index) => {
                            return <BookItem {...items} key={index} img={book} />
                        })
                    }
                </BookList>
            </section>
        </React.Fragment>
    )
}

export default Profile;