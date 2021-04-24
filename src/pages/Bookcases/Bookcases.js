import React, { useEffect, useState } from "react";

import getList from '../../helpers/getList';
import { addBookcase } from '../../services/bookcaseServices';

import Navbar from '../../components/Navbar/Navbar';
import ShelvesSvg from "./ShelvesSvg";
import Bookcase from "./Bookcase";
import PrimaryButton from '../../components/Button/PrimaryButton';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import BookForm from "./BookForm";

import "./Bookcases.scss";

const Bookcases = () => {

    const [bookcases, setBookcases] = useState(null);
    const [bookcaseName, setBookcaseName] = useState(null);
    const [inputVisible, setInputVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const [bookcasesClass, setBookcasesClass] = useState(" flex");
    const [bookFormClass, setBookFormClass] = useState(" hidden");
    const classes = "Bookcases-collection-wrapper" + bookcasesClass;
    const classes2 = "BookForm-wrapper" + bookFormClass;
    let bookcasesIsLoaded;
    if (bookcases == null || bookcases.length == 0) {
        bookcasesIsLoaded = false;
    } else {
        bookcasesIsLoaded = true;
    }

    const handleAddBookcase = (e) => {
        e.preventDefault();
        setLoader(true);
        addBookcase(bookcaseName);
        setLoader(false);
    }

    const handleAddBook = (e) =>{
        setBookFormClass(" flex");
        setBookcasesClass(" hidden");
    }

    /*useEffect(() => {
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
    }, []);*/
    return (
        <React.Fragment>
            <Navbar isMainPage={false} />
            <main className="Bookcases--wrapper">
                <ShelvesSvg />
                <section className="Bookcases__section">
                    <h3 className="Bookcases-heading-txt">My Bookcases</h3>
                    <PrimaryButton event={(e) => { setInputVisible(true) }} txt="Add a bookcase" />
                    {
                        loader ? <Loader/> : null
                    }
                    {
                        inputVisible ? <React.Fragment><Input name="addBookcase"
                            labelTxt="Bookcase name"
                            type="text"
                            event={(e) => setBookcaseName({ "tag": e.target.value })} />
                            <PrimaryButton event={handleAddBookcase} txt="Save a bookcase" /></React.Fragment> : null
                    }
                    <PrimaryButton event={handleAddBook} txt="Add a new book" />
                    <div className={classes}>
                        {
                            bookcasesIsLoaded ? bookcases.map((items, index) => {
                                return <Bookcase {...items} key={index} />
                            }) : <p className="txt-primary">You have not created any bookcases.</p>
                        }
                    </div>
                    <div className={classes2}>
                        <BookForm/>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Bookcases;