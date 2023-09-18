// import React from 'react'
import Mycard from '../Carousel/Mycard.js'
// import './Imagecarousel.css'
import '../../Main/Carousel/imagecarousel.css'

import React, { useEffect,useState } from 'react';

// ...



const Imagecarousel = () => {
    const [box, setBox] = useState();

    useEffect(() => {
        let box = document.querySelector('.product-container');
        console.log(box.clientWidth);
        setBox(box);
      }, []);
    // let box = document.querySelector('.product-container');
    // console.log(box.clientWidth);


    const btnpressprev = () => {
        if(box){
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            console.log(width)
        }
    }

    const btnpressnext = () => {
        if(box){
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
        }
    }
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' />
            </div>
        </div>
    )
}

export default Imagecarousel