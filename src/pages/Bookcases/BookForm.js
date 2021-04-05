import { useState } from "react";

import Input from "../../Input/Input";
import PrimaryButton from "../../Button/PrimaryButton";
import NavButton from "../../Button/NavButton";

import submitFile from "../functions/submitFile";

import "./BookForm.scss";


const BookForm = () => {
        const [authorVal, setAuthorVal] = useState("");
        const [titleVal, setTitleVal] = useState("");
        const [publisherVal, setPublisherVal] = useState("");
        const [statusVal, setStatusVal] = useState("");
        const [uploadedFile, setUploadedFile] = useState(null);

        const handleFileSubmit = () => {
        let formData = new FormData();
        formData.append('file', uploadedFile);
        console.log(uploadedFile);
        submitFile(formData, 'POST', 'https://booksontheshelfbackend.herokuapp.com/botsab/uploadFile');
    }

    return (
        <form className="BookForm">
            <Input name="bookAuthor" labelTxt="Author" type="text" event={(e) => setAuthorVal(e.value)} />
            <Input name="bookTitle" labelTxt="Title" type="text" event={(e) => setTitleVal(e.value)} />
            <Input name="bookPublisher" labelTxt="Publisher" type="text" event={(e) => setPublisherVal(e.value)} />
            <Input name="bookStatus" labelTxt="Reading status" type="text" event={(e) => setStatusVal(e.value)} />
            <Input name="uploadCover" labelTxt="Upload a book cover" type="file" event={(e) => setUploadedFile(e.target.files[0])}/>
            <PrimaryButton event={handleFileSubmit} txt="Upload the book cover" />
            <PrimaryButton event={()=> window.location.reload()} txt="Cancel" />
        </form>
    )
}

export default BookForm;