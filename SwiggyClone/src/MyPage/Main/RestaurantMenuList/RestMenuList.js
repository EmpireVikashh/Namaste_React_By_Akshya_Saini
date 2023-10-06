import "./restMenuList.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useData } from "../../Body/Context.js";
import { useSelector } from "react-redux";
import { addItem } from "../../ReduxStore/cartSlice";
import { useDispatch } from "react-redux";
// import addCartImage from "../../ImageFolder/addCart.png";
// import MyCart from "../../Header/Cart.js"

const RestaurantMenuList = () => {
  let cuisines = [
    "Paneer",
    "Pizzas",
    "Maggie",
    "Burgers",
    "Aloo potato",
    "Fried rice",
    "Desserts",
    "Butter Maggie",
    "Burgers",
    "Biryani",
    "Chili Potato",
    "Snacks",
    "Mashroom",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages",
  ];


  if(document.body.scrollTop === 0){
    // document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;
  }

  // it will give us id of restaurant
  const param = useParams();
  const { id } = param;
  // console.log(id);

  const { filterRestData } = useData();
  // console.log(filterRestData);

  const clickedRest = filterRestData.find((res) => res.info.id === id);
  // console.log(clickedRest);

  const cartItems = useSelector((store) => store.cart.items)//from redux part
  console.log(cartItems)

  const dispatch = useDispatch();
  const handleAddItems = (menuItems) =>{
    dispatch(addItem(menuItems));
  }

  return (
    <div className="menu-list">
      <div className="cart-header">
        {
          !clickedRest?(<h2>Restaurant Name : Loading...</h2>):(<h2>Restaurant Name : {clickedRest.info.name}</h2>)
        }
        <Link to="/cart"> <h1 >Cart- {cartItems.length}</h1> </Link>

        {/* <img src={addCartImage} alt="CartImage" className="CartImage" />
        <h2>Cart</h2> */}
      </div>
      

      <div className="menu-list-item">
        {cuisines.map((menuItems, idx) => (
          <div className="items" key={idx}>
            <h2>{menuItems}</h2>
            <button onClick={()=>{handleAddItems(menuItems)}} >Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuList;
