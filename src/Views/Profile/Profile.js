import React, { useState, useEffect } from "react";

import Navbar from "../../Navbar/Navbar";
import BookList from "./BookList/BookList";
import BookItem from "./BookList/BookItem";

import book from "./BookList/book.svg";

import getList from "./BookList/getList";
import "./Profile.scss";

const Profile = () => {

    let userId;
    const [booklist, setBooklist] = useState([{ id: null, author: null, title: null, img: null, pages: null }]);
    //const [userId, setUserId] = useState(null);
    console.log(userId);
    useEffect(() => {
        let data;
        const method = "GET";
        const url = `https://booksontheshelfbackend.herokuapp.com/botsab/reader/%7Bid%7D?id=${userId}`;
        getList(data, url, method)
            .then((data) => {
                const loadedBooks = [];
                for (const key in data) {
                    loadedBooks.push({
                        id: data[key].id,
                        author: data[key].author,
                        title: data[key].title,
                        pages: data[key].pages
                    });
                };
                return setBooklist(loadedBooks);
            });
    }, []);
    const name = "Guest Reader";
    const pages = Math.floor(Math.random() * 1200);

    /**todo: if (isLogged == false) {
        return (
            <React.Fragment>
                <Navbar isMainPage={false} />
            </React.Fragment>
        )
    }*/
    return (
        <React.Fragment>
            <Navbar isMainPage={false} />
            <section className="Profile-heading">
                <h2 className="Profile-heading-txt">Hi, {name}!</h2>
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