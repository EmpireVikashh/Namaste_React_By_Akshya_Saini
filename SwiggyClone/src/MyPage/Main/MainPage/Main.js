// import Carousel from '../Carousel/Carousel.js'
import Imagecarousel from '../Carousel/imagecarousel.js';
import MenuCarousal from '../MenuCarousal/MenuCarousal.js';
import RestaurantData from '../../../SwiggyJsonData/myJson.json';

const Main = ()=>{
// console.log(RestaurantData);
    return(
       <div id="main"> 
       <Imagecarousel carouselData={RestaurantData?.card?.carousel?.imageGridCards}/>
       <MenuCarousal carouselData={RestaurantData?.card?.Dishesh?.imageGridCards}/>

       </div>
    )
}
export default Main;

 