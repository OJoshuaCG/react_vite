import React from "react";
import { useState } from "react";
import "./style.css";

/*  SOURCES
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

*/

const FileViewer = () => {
    let url = "./src/images/none.jpg"
    let typeF = "image/jpg";
    // let url = "https://aprendepython.es/_downloads/907b5202c1466977a8d6bd3a2641453f/aprendepython.pdf";
    // let typeF = "application/pdf";
    const [fileUrl, setFileUrl] = useState(url);
    const [typeFile, setTypeFile] = useState(typeF);

    function handleUpload(){
        url = "https://aprendepython.es/_downloads/907b5202c1466977a8d6bd3a2641453f/aprendepython.pdf";
        typeF = "application/pdf"
        setFileUrl(url);
        setTypeFile(typeF);
    }


    function handleSubmit(){
        const input = document.getElementById("inputFile")
        if(input.files && input.files[0])
            console.log("HandleSend")
            console.log(input)
    }

    return (<>
        <form className="fileViewer" onSubmit={handleSubmit}>
            <label htmlFor="inputFile">Carga tu archivo</label>
            <input 
                type="file" 
                accept=".pdf"
                id="inputFile"
                onChange={handleUpload}/>
            <input type="submit" value="Enviar"/>
            <embed 
                src={fileUrl}
                type={typeFile}
            />            
        </form>
    </>);
};

export default FileViewer;
