import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import PropTypes, { array } from 'prop-types'
// import ReactDOM from 'react-dom/client'

const CarouselImg = styled.img`
max-width: 400px;
height: auto;
opacity: 0;
transition: 0.5s;
&.loaded{
    opacity: 1;
}
`;

function Carousel({images, autoPlay=false, showButtons=true}){
    // const images = ["img01.jpg","img02.jpg","img03.jpg","img04.jpg",]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(autoPlay || !showButtons){
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, images);
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    const selectNewImage = (index, images, next = false) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = !next ? 0 < selectedIndex : selectedIndex < images.length-1;
            const nextIndex = next ? (condition ? selectedIndex +1 : 0) : (condition ? selectedIndex-1 : images.length-1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 300);   
                
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectNewImage(selectedIndex, images, true);
    }

    return(<>
        <CarouselImg src={`./src/images/${selectedImage}`} alt="Items" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)}/>
        {showButtons ? (
            <>
                <button onClick={previous}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </>
        ) : (
            <></>
        )
        }        
    </>)
}


Carousel.propsTypes= {
    images : PropTypes.array.isRequired,
    autoPlay : PropTypes.bool,
    showButtons : PropTypes.bool,
}


export default Carousel;

