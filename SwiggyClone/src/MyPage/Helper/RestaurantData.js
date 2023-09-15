import jsonData from '../../SwiggyJsonData/myJson.json'
import {useState, useEffect} from 'react';

const RestaurantData = ()=>{
    const [data, setData] = useState();
    useEffect(()=>{
    setTimeout(()=>{setData(jsonData)},1000) ;  
    // getRestrauntData();
})

// async function getRestrauntData(){
//     // let prom = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//     // let resp = await prom.json();
//     // console.log(resp)
//     // setData(resp);
// }

    return data;
}
export default RestaurantData;
