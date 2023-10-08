import UserLocation from "../Helper/UserLocation.js";
import Search from "./Search.js";
import { Link } from "react-router-dom";
import addCartImage from "../ImageFolder/addCart.png";
import {useSelector} from "react-redux"

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
          <Link to="/signup" >
            <li>Signup</li>
          </Link>

          <Link to="/cart" style={{display: "contents",margin: "0px 0px 0px 0px"}}>
            <img src={addCartImage} alt="CartImage" className="CartImage"/> 
            <li className="cartName">Cart &nbsp; <span>{cartItems.length}</span></li>
          </Link>

        </ul>
      </div>
    </header>
  );
}
export default Header;
