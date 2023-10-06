import UserLocation from "../Helper/UserLocation.js";
import Search from "./Search.js";
import { Link } from "react-router-dom";
import addCartImage from "../ImageFolder/addCart.png";
import {useSelector} from "react-redux"
// import store from "../ReduxStore/store.js";

function Header() {
  const myLocation = UserLocation();
  const { city, state } = myLocation;
  const cartItems = useSelector((store) => store.cart.items)//from redux part

  return (
    <header>
      <div id="header">
        <div className="location">
          <Link to="/">
            <span className="spam">Home</span>
          </Link>
          {!city ? (
            <span className="Mylocation">Location...</span>
          ) : (
            <span className="Mylocation">
              {city} {state}
            </span>
          )}
        </div>

        {/* My Search component */}
            <Search/>

        <ul>
          {/* <Link to="/offer">
            <li>Offers</li>
          </Link> */}
          <Link to="/signup" style={{margin: "0px -59px 0px 78px"}}>
            <li>Signup</li>
          </Link>
          <Link to="/cart" style={{display: "contents",margin: "0px 0px 0px 0px"}}>
            <img src={addCartImage} alt="CartImage" className="CartImage"/> 
            <li style={{marginLeft: "-45px"}}>Cart- {cartItems.length}</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default Header;
