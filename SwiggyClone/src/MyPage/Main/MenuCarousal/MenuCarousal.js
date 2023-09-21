

import '../MenuCarousal/MenuCarousal.css'
import React, { useEffect,useState } from 'react';
import { Images } from '../../Helper/ImageFile.js';

const MenuCarousal = ({carouselData}) => {
    const [box, setBox] = useState();

    useEffect(() => {
        // why we use useEffect because i want to load query selector after Dom loaded succesfully
        let box = document.querySelector('.menu-container');//
        // console.log(box.clientWidth);
        setBox(box);
      }, []);
    // let box = document.querySelector('.product-container');
    // console.log(box.clientWidth);


    const btnpressprev = () => {
        if(box){//if box have the value the only button will work
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
        <div className="menu-product-carousel">
            <h2 className='carousal-desc'>Vikash, what's on your mind?</h2>
            <button className="menu-pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="menu-next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            <div className="menu-container">
            {carouselData.map((data)=>{
                return <img className="menu-mycard" src={Images + data.imageId} alt="carouselImages" key={data.id}/>
                
            })}

            </div>
        </div>
    )
}

export default MenuCarousal