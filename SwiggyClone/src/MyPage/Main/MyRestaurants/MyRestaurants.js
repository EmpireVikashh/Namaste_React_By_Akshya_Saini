import MyRestCards from "./MyRestCards.js";
import RestaurantData from "../../../SwiggyJsonData/myJson.json"
import {CloudImageIdLink} from "../../Helper/ImageFile.js"

const MyRestaurants = ()=>{
    return(
        <MyRestCards RestaurantData={RestaurantData.card.topRestaurants.restaurants} CloudImageIdLink={CloudImageIdLink}/>
    )
}
export default MyRestaurants;