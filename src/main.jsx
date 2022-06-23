import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from './components/Contador'
import Carousel from './components/Carousel'
import Descarga from './components/Descarga'
import FileViewer from './components/fileViewer/FileViewer'
import './styles/style.css' // importar estilos aqui o en el "index.html"

function App() {
    return(<>
        <h1>Hola mundo</h1>
    </>);
}

const images = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg",]

ReactDOM
.createRoot(document.getElementById('root'))
.render(
<React.StrictMode>
    <App />
    <Contador />
    <br/>
    <br/>    
    <Carousel images={images} autoPlay={false} showButtons={true}/>
    <br/>
    <Descarga />
    <br/>
    <FileViewer />

</React.StrictMode>);