import starRatingImage from "../../ImageFolder/star.png";
import "./myRestCard.css";
import { Link } from "react-router-dom";
import { useData } from "../../Body/Context.js"
import { useEffect } from "react";


const MyRestCards = ({ RestaurantData, CloudImageIdLink }) => {
  // set rest filter data in my context which i want to use is RestMenuList
  const {filterRestData, setFilterRestData} = useData();
  
  useEffect(()=>{
    setFilterRestData(RestaurantData);
  },[filterRestData,RestaurantData,setFilterRestData])

  return (
    <div className="MyRestCards">
      {RestaurantData.map((data, idx) => (
        <div className="rest-card-item" key={idx * 10 + 5}>
          <Link to={`restaurantMenuList/${data.info.id}`}>
            <div className="item-img">
              <img
                src={CloudImageIdLink + data.info.cloudinaryImageId}
                key={data.info.id}
                alt="myImageCard"
              />
            </div>
            <div className="rest-details">
              <h3 className="rest-name">{data.info.name}</h3>
            </div>
            <div className="rating">
              <img src={starRatingImage} alt="star" className="starRating" />
              <h4 className="rest-rating-number"> {data.info.avgRating}</h4>
            </div>
            <div className="cuisines">
              <p> {data.info.cuisines.join(", ")} </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MyRestCards;
