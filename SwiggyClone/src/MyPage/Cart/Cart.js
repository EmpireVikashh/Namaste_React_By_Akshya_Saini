import "./cart.css";
import { useSelector, useDispatch } from "react-redux"; // it is subscribing our store
import { decreaseItem, increaseItem } from "../ReduxStore/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  // const store = useSelector((store)=>store)// it will give us whole store that is not a good way
  const cartItems = useSelector((store) => store.cart.items); // here we subscribing only item part
  console.log("cart", cartItems);

  const dispatch = useDispatch();
  const increaseFoodItem = (itemNo) => {
    dispatch(increaseItem(itemNo));
  };

  const decreaseFoodItem = (itemNo) => {
    dispatch(decreaseItem(itemNo));
  };

  const totalPayment = cartItems.reduce((acc, curr) => {
    acc = acc + curr.price;
    return acc;
  }, 0);

  return (
    <div id="My-cart">
      <Link to="/">
        <h2 className="itemLength">{cartItems.length} - Home</h2>
      </Link>
      {cartItems.length === 0 ? (
        <div className="cartEmpty">
          <img
            src="https://media4.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=ecf05e47d6jgodu7vc7yc1fjcempiuvl1i3k1lx0cp81wn9g&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt=""
          />
          <h2>Your Cart is Empty!!😪😴</h2>
        </div>
      ) : (
        <div className="cartAndPayment">
          <div className="My_Cart_List">
            {cartItems.map((myItem, idx) => (
              <div className="cart-card" key={myItem.id}>
                <div className="item-image">
                  <img src={myItem.imageData} alt="itemImage" />
                </div>
                <div className="my-Item">
                  <h3>{myItem.item}</h3>
                  <p>₹{myItem.price}</p>
                </div>
                <div className="add-remove">
                  <button
                    id="++addBtn"
                    onClick={() => {
                      increaseFoodItem(myItem.itemNo);
                    }}
                  >
                    +
                  </button>
                  <p>{myItem.quantity}</p>
                  <button
                    id="--removeBtn"
                    onClick={() => {
                      decreaseFoodItem(myItem.itemNo);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="totalPaymentList">
            {cartItems.map((myItem, idx) => (
              <div className="Total_Item" key={myItem.id}>
                <p>{myItem.quantity}</p>
                <h3>{myItem.item}</h3>
                <p>₹{myItem.price}</p>
              </div>
            ))}
            <div className="toPayment">
              <span>TO PAY</span>
              <span>₹{totalPayment}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
