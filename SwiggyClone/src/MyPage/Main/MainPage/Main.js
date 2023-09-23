// import Carousel from '../Carousel/Carousel.js'
import RestaurantData from '../../../SwiggyJsonData/myJson.json';
import Imagecarousel from '../Carousel/imagecarousel.js';
import MenuCarousal from '../MenuCarousal/MenuCarousal.js';
import MyRestaurants from '../MyRestaurants/MyRestaurants.js';

const Main = ()=>{
// console.log(RestaurantData);
    return(
       <div id="main"> 
       <Imagecarousel carouselData={RestaurantData?.card?.carousel?.imageGridCards}/>
       <MenuCarousal carouselData={RestaurantData?.card?.Dishesh?.imageGridCards}/>
       <MyRestaurants/>
       </div>
    )
}
export default Main;

 