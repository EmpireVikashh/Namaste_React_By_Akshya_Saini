import UserLocation from '../Helper/UserLocation.js';
function Header(){
    const myLocation = UserLocation();
    // const {city,state} = myLocation;
    return(
        <header>
        <div id="header">
            <div className="location"><span className="spam">Home</span><span className="Mylocation">{myLocation}</span></div>
            <div className="search">Search</div>
            <ul>
                <li>Offers</li>
                <li>Cart</li>
                <li>Vikash</li>
            </ul>
        </div>
        </header>
    )
}
export default Header;