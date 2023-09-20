// import Carousel from '../Carousel/Carousel.js'
import Imagecarousel from '../Carousel/imagecarousel';
import RestaurantData from '../../../SwiggyJsonData/myJson.json';

const Main = ()=>{
// console.log(RestaurantData);
    return(
       <div id="main"> 
       {/* <Carousel carouselData={RestaurantData?.card?.carousel?.imageGridCards}/> */}
       <Imagecarousel carouselData={RestaurantData?.card?.carousel?.imageGridCards}/>

       </div>
    )
}
export default Main;

 