import UserLocation from "../Helper/UserLocation.js";
import {SearchText} from "../Helper/SearchText.js";
import { Link } from "react-router-dom";
import search from "../ImageFolder/search.png";
import { useState } from "react";
function Header() {
  const myLocation = UserLocation();
  const [inputText, setInputText] = useState("");
  // console.log(searchText)

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

        <div className="search">
          <input
            placeholder="Find your food"
            value={inputText}
            onChange={(e) => {
                setInputText(e.target.value);
            }}
            onKeyPress={(e)=>{
                if(e.key==='Enter'){
                    SearchText(inputText)
                }
            }}
          />
          <img
            src={search}
            alt=""
            className="search-icon"
            onClick={() => SearchText(inputText)}
          />
        </div>
        <ul>
          <Link to="/offer">
            <li>Offers</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/signup">
            <li>Swati</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default Header;
