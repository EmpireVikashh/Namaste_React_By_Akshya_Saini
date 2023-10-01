import { useParams } from "react-router-dom";
import {useData} from "../../Body/Context.js"
// import { useEffect } from "react";

const RestaurantMenuList = ()=>{
    // it will give us id of restaurant
    const param = useParams();
    const {id} = param;
    console.log(id);
    
    console.log(useData());

    // const {filterRestData} = useData();
    // useEffect(()=>{
    //     console.log(filterRestData)
    //   },[filterRestData])

    return(
        <div className="menu-list">
            <div className="menu-list-item">
                <h1>Rest Id : {id}</h1>
            </div>
        </div>
    )
}
export default RestaurantMenuList;