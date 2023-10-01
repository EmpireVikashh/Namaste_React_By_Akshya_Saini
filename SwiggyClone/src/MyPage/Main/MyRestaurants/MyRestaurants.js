import MyRestCards from "./MyRestCards.js";
import RestaurantData from "../../../SwiggyJsonData/myJson.json"
import { CloudImageIdLink } from "../../Helper/ImageFile.js"
import { useData } from "../../Body/Context.js";
import { useState, useEffect } from "react";


const MyRestaurants = () => {
    const { searchText } = useData();
    const restaurantsCardInfo = RestaurantData.card.topRestaurants.restaurants;
    const [myData, setMyData] = useState(restaurantsCardInfo);

    useEffect(() => {
        if (searchText) {
            const filterData = restaurantsCardInfo.filter((data, idx) => {
                let findText = searchText.toLowerCase();
                let name = data.info.name.toLowerCase();
                return name.includes(findText);
            })
            setMyData(filterData);
        }
        else if(searchText===""){
            setMyData(restaurantsCardInfo);
        }
    }, [searchText, restaurantsCardInfo]);

    return (
        <MyRestCards RestaurantData={myData} CloudImageIdLink={CloudImageIdLink} />
    )
}
export default MyRestaurants;
