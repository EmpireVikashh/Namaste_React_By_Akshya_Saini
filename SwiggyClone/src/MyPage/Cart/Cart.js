import "./cart.css";
import { useSelector, useDispatch } from "react-redux"; // it is subscribing our store
import { removeItem } from "../ReduxStore/cartSlice";

const Cart = () => {
  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf";
  // const store = useSelector((store)=>store)// it will giv us whole store that is not a good way
  const cartItems = useSelector((store) => store.cart.items); // here we subscribing only item part
  console.log(cartItems);

  const dispatch = useDispatch();
  const removeFoodItem = (Id) => {
    dispatch(removeItem(Id));
  };

  return (
    <div id="My-cart">
      <h2 className="itemLength">{cartItems.length} - Items</h2>
      <div className="My_Cart_List">
        {cartItems.map((myItem, idx) => (
          <div className="cart-card" key={myItem.id}>
            <div className="item-image">
              <img src={imgLink} alt="itemImage" />
            </div>
            <div className="my-Item">
              <h3>{myItem.item}</h3>
              <p>{myItem.price}₹</p>
            </div>
            <div className="add-remove">
              <button>+</button>
              <p>1</p>
              <button
                onClick={() => {
                  removeFoodItem(myItem.id);
                }}
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
