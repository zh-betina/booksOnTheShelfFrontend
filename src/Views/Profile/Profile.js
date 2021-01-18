import React from "react";

import Navbar from "../../Navbar/Navbar";

import "./Profile.scss";

const Profile = () => {
    const name = "Guest Reader";
    const pages = Math.floor(Math.random() * 120);
    return (
        <React.Fragment>
            <Navbar isMainPage={false} />
            <section className="Profile-heading">
                <h2 className="Profile-heading-txt">Hi, {name}!</h2>
                <p className="txt-primary">This
                    <select>
                        <option className="txt-primary" value="year">year</option>
                        <option className="txt-primary" value="month">month</option>
                        <option className="txt-primary" value="today">today</option></select>
                you've read {pages} in total.
                </p>
            </section>
            <section className="Profile-books">
                <div className="Booklist">
                    <h3 className="Booklist-heading">Recently read:</h3>
                </div>
                <div className="Booklist">
                    <h3 className="Booklist-heading">Reading:</h3>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Profile;