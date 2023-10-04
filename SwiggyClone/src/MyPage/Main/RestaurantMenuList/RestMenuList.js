import "./restMenuList.css";
import { useParams } from "react-router-dom";
import { useData } from "../../Body/Context.js";
import addCartImage from "../../ImageFolder/addCart.png";

const RestaurantMenuList = () => {

  if(document.body.scrollTop === 0){
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  }
  // console.log(document.body.scrollTop," ",document.documentElement.scrollTop)

  // it will give us id of restaurant
  const param = useParams();
  const { id } = param;
  // console.log(id);

  const { filterRestData } = useData();
  // console.log(filterRestData);

  const clickedRest = filterRestData.find((res) => res.info.id === id);
  console.log(clickedRest);

  let cuisines = [
    "American",
    "Pizzas",
    "Maggie",
    "Burgers",
    "American",
    "Desserts",
    "Butter Maggie",
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food",
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages",
  ];

  return (
    <div className="menu-list">
      <div className="cart-header">
        {/* {
            !clickedRest?(<h1>Restaurant Name : Loading...</h1>):(<h1>Restaurant Name : {clickedRest.info.name}</h1>)
        } */}
<h1>Restaurant Name : Loading...</h1>
        <img src={addCartImage} alt="CartImage" className="CartImage" />
        <li>Cart</li>
      </div>
      <div className="menu-list-item">
        {cuisines.map((item, idx) => (
          <div className="items" key={idx}>
            <h2>{item}</h2>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuList;
