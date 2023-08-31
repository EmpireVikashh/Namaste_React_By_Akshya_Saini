import ShimmerEffect from '../ShimmerEffect/ShimmerEffect.js';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import {useState, useEffect} from 'react';

const Body = ()=>{
    const [data, setData] = useState();
    useEffect(()=>{
        getRestrauntData();
    }, [])

    async function getRestrauntData(){
        let prom = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let resp = await prom.json();
        // console.log(resp)
        setData(resp);
    }
    console.log(data);

    return !data?<ShimmerEffect/>:(
        <div id="body">
         <Header/>  


        {/* <h2>My Body</h2> */}
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/q0t8dkpigeideecc1hun"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vsdxtvuz2czmvdgcsggq"} alt='myImage' className='myImage'/>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uws6wm1xndcgtox6moif"} alt='myImage' className='myImage'/>


        <Footer/>
        </div>
    )
}
export default Body;