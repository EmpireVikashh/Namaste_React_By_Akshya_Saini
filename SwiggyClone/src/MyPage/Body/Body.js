import ShimmerEffect from '../ShimmerEffect/ShimmerEffect.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import RestaurantData from '../Helper/RestaurantData.js';
import Main from '../Main/MainPage/Main.js';
import { DataProvider } from './Context.js';
const Body = () => {

    const data = RestaurantData();

    return !data ? <ShimmerEffect /> : (

        <div id="body">
            <DataProvider>
                <Header />
                <Main />
                <Footer/>
            </DataProvider>
        </div>
    )
}
export default Body;