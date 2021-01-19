import React from "react";

import Navbar from "../../Navbar/Navbar";
import BookList from "./BookList/BookList";
import BookItem from "./BookList/BookItem";

import "./Profile.scss";

const Profile = () => {
    const name = "Guest Reader";
    const pages = Math.floor(Math.random() * 1200);
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
                    <BookItem id="1" author="A. Mickiewicz" title="Dziady" pages="12/500" />
                    <BookItem id="2" author="H.Sienkiewicz" title="Potop" pages="12/500" />
                    <BookItem id="3" author="T.W. Rinpocze" title="Joga Snu i Śnienia" pages="12/500" />

                </BookList>
                <BookList heading="Reading:">
                    <BookItem id="3" author="J.K. Rowling" title="Harry Potter" pages="300/500"/>
                    <BookItem id="1" author="A. Mickiewicz" title="Dziady" pages="12/500" />
                    <BookItem id="2" author="H.Sienkiewicz" title="Potop" pages="12/500" />
                </BookList>
            </section>
        </React.Fragment>
    )
}

export default Profile;