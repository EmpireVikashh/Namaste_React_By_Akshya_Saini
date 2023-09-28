// import RestaurantData from "../../SwiggyJsonData/myJson.json"
// import { useState,useEffect } from "react"

// const SearchText = (searchText)=>{

//     const [resData,setResData] = useState(RestaurantData.card.topRestaurants.restaurants);
   
//         const data = RestaurantData.card.topRestaurants.restaurants;
//         setResData(data);
//         console.log(resData);
//   console.log(searchText)

// }

// export default SearchText;

import RestaurantData from "../../SwiggyJsonData/myJson.json";
import { useState, useEffect } from "react";

const SearchText = (searchText) => {
  // Define resData state and initialize it with an initial value (an empty array in this case)
  const [resData, setResData] = useState([]);

  useEffect(() => {
    // Fetch and set data when the component mounts
    const data = RestaurantData.card.topRestaurants.restaurants;
    setResData(data);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Logging here will not show the updated state immediately
  console.log(resData);

  return (
    <div>
      {/* Render your UI here */}
    </div>
  );
};

export default SearchText;

