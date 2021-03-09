import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import getList from "../functions/getList";
import submitFile from "../functions/submitFile";

import Navbar from "../../Navbar/Navbar";
import ShelvesSvg from "./ShelvesSvg";
import Bookcase from "./Bookcase";
import PrimaryButton from "../../Button/PrimaryButton";
import Input from "../../Input/Input";
//import BookForm from "./BookForm";

import "./Bookcases.scss";

const Bookcases = () => {

    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const [bookcases, setBookcases] = useState(null);
    const [bookcaseName, setBookcaseName] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    let bookcasesIsLoaded;
    const history = useHistory();
    if (bookcases == null || bookcases.length == 0) {
        bookcasesIsLoaded = false;
    } else {
        bookcasesIsLoaded = true;
    }

    const handleAddBookcase = (e)=>{
        console.log("Bookcase name", bookcaseName);
        e.preventDefault();
        let data = bookcaseName;
        const method = "POST";
        const url = `https://booksontheshelfbackend.herokuapp.com/botsab/bookcase`;
        getList(data, url, method)
            .then((data)=>{
                const url = `https://booksontheshelfbackend.herokuapp.com/botsab/addbookcasetoreader?id=${userId}&bookcaseId=${data.id}`;
                data = undefined;
                const method = "PUT";
                getList(data, url, method)
                    .then(()=>{
                        history.push('/bookcases');
                    })
            });
    }

    const handleFileSubmit = ()=>{
        let formData = new FormData();
        formData.append('file', uploadedFile);
        console.log(uploadedFile);
        submitFile(formData, 'POST', 'https://booksontheshelfbackend.herokuapp.com/botsab/uploadFile');

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
                        <PrimaryButton event={handleAddBookcase} txt="Add a new bookcase" />
                        <Input name="addBookcase" labelTxt="Bookcase name" type="text" event={(e)=> setBookcaseName({"tag": e.target.value})} />
                        <Input name="uploadCover" labelTxt="Upload a book cover" type="file" event={(e) => setUploadedFile(e.target.files[0])}/>
                        <PrimaryButton event={handleFileSubmit} txt="Upload the book cover" />
                        <PrimaryButton event={handleAddBookcase} txt="Add a new book" />
                    <div className="Bookcases-collection-wrapper">
                        {
                            bookcasesIsLoaded ? bookcases.map((items, index) => {
                                return <Bookcase {...items} key={index} />
                            }) : <p className="txt-primary">You have not created any bookcases.</p>
                        }
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Bookcases;