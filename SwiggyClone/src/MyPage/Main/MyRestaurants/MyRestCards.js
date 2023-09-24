// import { ImageArray } from "../../Helper/ImageFile.js";
import starRatingImage from "../../ImageFolder/star.png";
import "./myRestCard.css";

const MyRestCards = ({ RestaurantData, CloudImageIdLink }) => {
  return (
    <div className="MyRestCards">
      {RestaurantData.map((data, idx) => (
        <div className="rest-card-item" key={idx * 10 + 5}>
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
        </div>
      ))}
    </div>
  );
};
export default MyRestCards;
