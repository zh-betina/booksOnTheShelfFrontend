import React, { useEffect, useState } from "react";

import getList from "../functions/getList";

import Navbar from "../../Navbar/Navbar";
import ShelvesSvg from "./ShelvesSvg";
import Bookcase from "./Bookcase";

import "./Bookcases.scss";

const Bookcases = () => {

    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [bookcases, setBookcases] = useState(null);
    let bookcasesIsLoaded;
    if(bookcases == null || []){
        bookcasesIsLoaded = false;
    }else{
        bookcasesIsLoaded = true;
    }

    useEffect(() => {
        let data;
        const method = "GET";
        const url = `https://booksontheshelfbackend.herokuapp.com/botsab/reader?id=${userId}`;
        getList(data, url, method)
            .then((data) => {
                console.log(data);
                const loadedBookcases = [];
                for (const key in data.bookcases) {
                    loadedBookcases.push({
                        id: data.bookcases[key].id,
                        tag: data.bookcases[key].tag,
                        books: data.bookcases[key].books
                    });
                };
                setBookcases(loadedBookcases);
            });
    }, []);
    return (
        <React.Fragment>
            <Navbar isMainPage={false} />
            <main className="Bookcases--wrapper">
                <ShelvesSvg />
                <section className="Bookcases__section">
                <h3 className="Bookcases-heading-txt">My Bookcases</h3>
                {
                    bookcasesIsLoaded ? bookcases.map((items, index) => {
                        return <Bookcase {...items} key={index} />
                    }) : <p className="txt-primary">You have not created any bookcases.</p>
                }
                </section>
            </main>
        </React.Fragment>
    )
}

export default Bookcases;