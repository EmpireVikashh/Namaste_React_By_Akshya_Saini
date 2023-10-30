import '../../Main/Carousel/imagecarousel.css'
import React, { useEffect,useState } from 'react';
import { Images } from '../../Helper/ImageFile.js';

const Imagecarousel = ({carouselData}) => {
    const [box, setBox] = useState();

    useEffect(() => {
        // why we use useEffect because i want to load query selector after Dom loaded succesfully
        let box = document.querySelector('.offer-product-container');//
        // console.log(box.clientWidth);
        setBox(box);
      }, []);
    // let box = document.querySelector('.product-container');
    // console.log(box.clientWidth);


    const btnpressprev = () => {
        if(box){//if box have the value the only button will work
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
            // console.log(width)
        }
    }

    const btnpressnext = () => {
        if(box){
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        // console.log(width)
        }
    }
    return (
        <div className="offer-product-carousel">
            <h2 className='carousal-desc'>Best offers for you</h2>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            <div className="offer-product-container">
            {carouselData.map((data)=>{
                return <img className="offer-mycard" src={Images + data.imageId} alt="carouselImages" key={data.id}/>
                
            })}

            </div>
        </div>
    )
}

export default Imagecarousel