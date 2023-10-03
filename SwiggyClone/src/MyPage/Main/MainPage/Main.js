import RestaurantData from '../../../SwiggyJsonData/myJson.json';
import Imagecarousel from '../Carousel/imagecarousel.js';
import MenuCarousal from '../MenuCarousal/MenuCarousal.js';
import MyRestaurants from '../MyRestaurants/MyRestaurants.js';
import Header from '../../Header/Header.js'
import Footer from '../../Footer/Footer.js'

const Main = ()=>{
    return(
       <div id="main"> 
       <Header/>
       <div id="mid-body">
       <Imagecarousel carouselData={RestaurantData?.card?.carousel?.imageGridCards}/>
       <MenuCarousal carouselData={RestaurantData?.card?.Dishesh?.imageGridCards}/>
       <MyRestaurants/>
       </div>
       <Footer/>
       </div>
    )
}
export default Main;

 