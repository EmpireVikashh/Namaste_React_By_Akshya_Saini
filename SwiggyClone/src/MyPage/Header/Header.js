import UserLocation from '../Helper/UserLocation.js';
import { Link } from 'react-router-dom';
import search from "../ImageFolder/search.png"
function Header() {
    const myLocation = UserLocation();
    const { city, state } = myLocation;
    return (
        <header>
            <div id="header">
                <div className="location">
                    <Link to="/"><span className="spam">Home</span></Link>
                    {
                        !city ? <span className="Mylocation">Location...</span> :
                            <span className="Mylocation">{city} {state}</span>
                    }
                </div>

                <div className="search">
                    <input type="text" placeholder="Find your food"/>
                    <img src={search} alt="" className="search-icon"/>
                    </div>
                <ul>
                    <Link to="/offer">
                        <li>Offers</li>
                    </Link>
                    <Link to="/cart">
                        <li>Cart</li>
                    </Link>
                    <Link to="/signup">
                        <li>SignUp</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}
export default Header;