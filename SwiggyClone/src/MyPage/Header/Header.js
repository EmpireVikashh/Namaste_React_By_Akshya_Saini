import UserLocation from "../Helper/UserLocation.js";
import Search from "./Search.js";
import { Link } from "react-router-dom";


function Header() {
  const myLocation = UserLocation();
  const { city, state } = myLocation;

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
          <Link to="/offer">
            <li>Offers</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/signup">
            <li>Signup</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default Header;
