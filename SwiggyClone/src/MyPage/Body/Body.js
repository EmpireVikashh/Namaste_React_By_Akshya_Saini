import {useState, useEffect} from 'react';
const Body = ()=>{
    const [data, setData] = useState();
    useEffect(()=>{
        getRestrauntData();
    }, [])

    async function getRestrauntData(){
        let prom = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let resp = await prom.json();
        console.log(resp)
        setData(resp);
    }
    console.log(data);

    return(
        <div id="body">
        <h2>My Body</h2>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage'/>
        </div>
    )
}
export default Body;