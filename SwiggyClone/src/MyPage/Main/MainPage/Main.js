import Carousel from '../Carousel/Carousel.js'
import RestaurantData from '../../../SwiggyJsonData/myJson.json';

const Main = ()=>{
console.log(RestaurantData);
    return(
       <div id="main"> 
       <Carousel carouselData={RestaurantData.card.carousel.imageGridCards}/>

       {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q0t8dkpigeideecc1hun"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uws6wm1xndcgtox6moif"} alt='myImage' className='myImage'/> */}

       </div>
    )
}
export default Main;

 