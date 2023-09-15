import ShimmerEffect from '../ShimmerEffect/ShimmerEffect.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import RestaurantData from '../Helper/RestaurantData.js';
import Main from '../Main/MainPage/Main.js';
const Body = ()=>{
  
    const data = RestaurantData();

    return !data?<ShimmerEffect/>:(
        <div id="body">
         <Header/>  
         <Main/>
         <Footer/>
        </div>
    )
}
export default Body;